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

func createNTopic(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Topic {
	items := make([]types.Topic, n)
	for i := range items {
		items[i].TopicId = uint64(i)

		keeper.SetTopic(ctx, items[i])
	}
	return items
}

func TestTopicGet(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNTopic(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTopic(ctx,
			item.TopicId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTopicRemove(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNTopic(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTopic(ctx,
			item.TopicId,
		)
		_, found := keeper.GetTopic(ctx,
			item.TopicId,
		)
		require.False(t, found)
	}
}

func TestTopicGetAll(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNTopic(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTopic(ctx)),
	)
}
