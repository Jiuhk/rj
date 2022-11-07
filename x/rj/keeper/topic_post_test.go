package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "rj/testutil/keeper"
	"rj/testutil/nullify"
	"rj/x/rj/keeper"
	"rj/x/rj/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNTopicPost(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.TopicPost {
	items := make([]types.TopicPost, n)
	for i := range items {
		items[i].TopicId = uint64(i)

		keeper.SetTopicPost(ctx, items[i])
	}
	return items
}

func TestTopicPostGet(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNTopicPost(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTopicPost(ctx,
			item.TopicId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTopicPostRemove(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNTopicPost(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTopicPost(ctx,
			item.TopicId,
		)
		_, found := keeper.GetTopicPost(ctx,
			item.TopicId,
		)
		require.False(t, found)
	}
}

func TestTopicPostGetAll(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNTopicPost(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTopicPost(ctx)),
	)
}
