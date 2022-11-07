package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

func (k msgServer) CreateSection(goCtx context.Context, msg *types.MsgCreateSection) (*types.MsgCreateSectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newSectionId, found :=  k.Keeper.GetSectionId(ctx)
	if !found {
		panic("NextSectionId not found")
	}

	newSection := types.Section{
		SectionId:	newSectionId.SectionId,
		Name:		msg.Name,
	}

	k.Keeper.SetSection(ctx, newSection)
	newSectionId.SectionId++
	k.Keeper.SetSectionId(ctx, newSectionId)

	return &types.MsgCreateSectionResponse{ SectionId: newSectionId.SectionId }, nil
}
