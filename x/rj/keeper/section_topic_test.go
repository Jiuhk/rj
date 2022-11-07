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

func createNSectionTopic(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SectionTopic {
	items := make([]types.SectionTopic, n)
	for i := range items {
		items[i].SectionId = uint64(i)

		keeper.SetSectionTopic(ctx, items[i])
	}
	return items
}

func TestSectionTopicGet(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNSectionTopic(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSectionTopic(ctx,
			item.SectionId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSectionTopicRemove(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNSectionTopic(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSectionTopic(ctx,
			item.SectionId,
		)
		_, found := keeper.GetSectionTopic(ctx,
			item.SectionId,
		)
		require.False(t, found)
	}
}

func TestSectionTopicGetAll(t *testing.T) {
	keeper, ctx := keepertest.RjKeeper(t)
	items := createNSectionTopic(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSectionTopic(ctx)),
	)
}
