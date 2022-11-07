package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "rj/testutil/keeper"
	"rj/testutil/nullify"
	"rj/x/rj/keeper"
	"rj/x/rj/types"
)

func createTestTopicId(keeper *keeper.Keeper, ctx sdk.Context) types.TopicId {
	item := types.TopicId{}
	keeper.SetTopicId(ctx, item)
	return item
}

func TestTopicIdGet(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	item := createTestTopicId(keeper, ctx)
	rst, found := keeper.GetTopicId(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestTopicIdRemove(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	createTestTopicId(keeper, ctx)
	keeper.RemoveTopicId(ctx)
	_, found := keeper.GetTopicId(ctx)
	require.False(t, found)
}
