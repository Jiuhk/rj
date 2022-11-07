package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "rj/testutil/keeper"
	"rj/testutil/nullify"
	"rj/x/rj/types"
)

func TestPostIdQuery(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestPostId(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetPostIdRequest
		response *types.QueryGetPostIdResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetPostIdRequest{},
			response: &types.QueryGetPostIdResponse{PostId: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.PostId(wctx, tc.request)
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