package rj

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"rj/testutil/sample"
	rjsimulation "rj/x/rj/simulation"
	"rj/x/rj/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = rjsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateTopic = "op_weight_msg_create_topic"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTopic int = 100

	opWeightMsgCreatePost = "op_weight_msg_create_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePost int = 100

	opWeightMsgCreateSection = "op_weight_msg_create_section"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSection int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	rjGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&rjGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateTopic int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTopic, &weightMsgCreateTopic, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTopic = defaultWeightMsgCreateTopic
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTopic,
		rjsimulation.SimulateMsgCreateTopic(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreatePost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePost, &weightMsgCreatePost, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePost = defaultWeightMsgCreatePost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePost,
		rjsimulation.SimulateMsgCreatePost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateSection int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateSection, &weightMsgCreateSection, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSection = defaultWeightMsgCreateSection
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSection,
		rjsimulation.SimulateMsgCreateSection(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
