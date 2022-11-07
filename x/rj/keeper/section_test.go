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

func createNSection(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Section {
	items := make([]types.Section, n)
	for i := range items {
		items[i].SectionId = uint64(i)

		keeper.SetSection(ctx, items[i])
	}
	return items
}

func TestSectionGet(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNSection(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSection(ctx,
			item.SectionId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSectionRemove(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNSection(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSection(ctx,
			item.SectionId,
		)
		_, found := keeper.GetSection(ctx,
			item.SectionId,
		)
		require.False(t, found)
	}
}

func TestSectionGetAll(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNSection(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSection(ctx)),
	)
}
