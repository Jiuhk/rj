package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

func (k msgServer) CreateTopic(goCtx context.Context, msg *types.MsgCreateTopic) (*types.MsgCreateTopicResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateTopicResponse{}, nil
}
