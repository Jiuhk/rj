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

func createTestSectionId(keeper *keeper.Keeper, ctx sdk.Context) types.SectionId {
	item := types.SectionId{}
	keeper.SetSectionId(ctx, item)
	return item
}

func TestSectionIdGet(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	item := createTestSectionId(keeper, ctx)
	rst, found := keeper.GetSectionId(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestSectionIdRemove(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	createTestSectionId(keeper, ctx)
	keeper.RemoveSectionId(ctx)
	_, found := keeper.GetSectionId(ctx)
	require.False(t, found)
}
