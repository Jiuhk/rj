package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"rj/x/rj/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				SectionId: &types.SectionId{
					SectionId: 44,
				},
				TopicId: &types.TopicId{
					TopicId: 20,
				},
				PostId: &types.PostId{
					PostId: 80,
				},
				SectionList: []types.Section{
					{
						SectionId: 0,
					},
					{
						SectionId: 1,
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated section",
			genState: &types.GenesisState{
				SectionList: []types.Section{
					{
						SectionId: 0,
					},
					{
						SectionId: 0,
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
