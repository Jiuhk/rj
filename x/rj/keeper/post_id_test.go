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

func createTestPostId(keeper *keeper.Keeper, ctx sdk.Context) types.PostId {
	item := types.PostId{}
	keeper.SetPostId(ctx, item)
	return item
}

func TestPostIdGet(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	item := createTestPostId(keeper, ctx)
	rst, found := keeper.GetPostId(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestPostIdRemove(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	createTestPostId(keeper, ctx)
	keeper.RemovePostId(ctx)
	_, found := keeper.GetPostId(ctx)
	require.False(t, found)
}
