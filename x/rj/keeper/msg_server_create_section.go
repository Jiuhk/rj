package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

func (k msgServer) CreateSection(goCtx context.Context, msg *types.MsgCreateSection) (*types.MsgCreateSectionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newSectionId, found :=  k.Keeper.GetSectionId(ctx)
	if !found {
		panic("NextSectionId not found")
	}

	newSectionIdDecimal :=  strconv.FormatUint(newSectionId.SectionId, 10)
	section := types.Section{
		SectionId:	newSectionIdDecimal,
		Name:		msg.Name,
	}
	err := section.Validate()
	if err != nil{
		return nil, err
	}

	newSectionId.SectionId++
	k.Keeper.SetSectionId(ctx, newSectionId)

	return &types.MsgCreateSectionResponse{ SectionId: newSectionId }, nil
}
