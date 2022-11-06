package rj

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/keeper"
	"rj/x/rj/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.SectionId != nil {
		k.SetSectionId(ctx, *genState.SectionId)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all sectionId
	sectionId, found := k.GetSectionId(ctx)
	if found {
		genesis.SectionId = &sectionId
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
