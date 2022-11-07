package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "rj/testutil/keeper"
	"rj/testutil/nullify"
	"rj/x/rj/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestTopicPostQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNTopicPost(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetTopicPostRequest
		response *types.QueryGetTopicPostResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetTopicPostRequest{
				TopicId: msgs[0].TopicId,
			},
			response: &types.QueryGetTopicPostResponse{TopicPost: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetTopicPostRequest{
				TopicId: msgs[1].TopicId,
			},
			response: &types.QueryGetTopicPostResponse{TopicPost: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetTopicPostRequest{
				TopicId: 100000,
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.TopicPost(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestTopicPostQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNTopicPost(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllTopicPostRequest {
		return &types.QueryAllTopicPostRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.TopicPostAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.TopicPost), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.TopicPost),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.TopicPostAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.TopicPost), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.TopicPost),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.TopicPostAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.TopicPost),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.TopicPostAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
