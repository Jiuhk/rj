package keeper

import (
	"context"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

func (k msgServer) CreateTopic(goCtx context.Context, msg *types.MsgCreateTopic) (*types.MsgCreateTopicResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newTopicId, found :=  k.Keeper.GetTopicId(ctx)
	if !found {
		panic("NextTopicId not found")
	}

	sectionTopics, found := k.Keeper.GetSectionTopic(ctx, msg.SectionId)
	if !found {
		panic("Section not found")
	}

	newTopic := types.Topic{
		TopicId:	newTopicId.TopicId,
		SectionId:	msg.SectionId,
		Title:		msg.Title,
		Creator:	msg.Creator,
		CreatedAt:	time.Now().String(),
		UpdatedAt:	time.Now().String(),
	}

	k.Keeper.SetTopic(ctx, newTopic)

	newSectionTopics := append(sectionTopics.Topics, newTopicId.TopicId)
	k.Keeper.SetSectionTopic(ctx, types.SectionTopic{
		SectionId:	msg.SectionId,
		Topics:		newSectionTopics,
	})

	k.Keeper.SetTopicPost(ctx, types.TopicPost{
		TopicId:	newTopicId.TopicId,
		Posts:		[]uint64{},
	})

	newTopicId.TopicId++
	k.Keeper.SetTopicId(ctx, newTopicId)

	return &types.MsgCreateTopicResponse{ TopicId: newTopicId.TopicId }, nil
}
