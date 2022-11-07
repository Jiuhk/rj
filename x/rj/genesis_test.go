package rj_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "rj/testutil/keeper"
	"rj/testutil/nullify"
	"rj/x/rj"
	"rj/x/rj/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		SectionId: &types.SectionId{
			SectionId: 76,
		},
		TopicId: &types.TopicId{
			TopicId: 44,
		},
		PostId: &types.PostId{
			PostId: 63,
		},
		SectionList: []types.Section{
			{
				SectionId: 0,
			},
			{
				SectionId: 1,
			},
		},
		TopicList: []types.Topic{
			{
				TopicId: 0,
			},
			{
				TopicId: 1,
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.RjKeeper(t)
	rj.InitGenesis(ctx, *k, genesisState)
	got := rj.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.SectionId, got.SectionId)
	require.Equal(t, genesisState.TopicId, got.TopicId)
	require.Equal(t, genesisState.PostId, got.PostId)
	require.ElementsMatch(t, genesisState.SectionList, got.SectionList)
	require.ElementsMatch(t, genesisState.TopicList, got.TopicList)
	// this line is used by starport scaffolding # genesis/test/assert
}
