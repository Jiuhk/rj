package keeper

import (
	"context"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

func (k msgServer) CreatePost(goCtx context.Context, msg *types.MsgCreatePost) (*types.MsgCreatePostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newPostId, found :=  k.Keeper.GetPostId(ctx)
	if !found {
		panic("NextPostId not found")
	}

	topicPosts, found := k.Keeper.GetTopicPost(ctx, msg.TopicId)
	if !found {
		panic("Topic not found")
	}

	newPost := types.Post{
		PostId:		newPostId.PostId,
		TopicId:	msg.TopicId,
		Content:	msg.Content,
		Creator:	msg.Creator,
		CreatedAt:	time.Now().String(),
		UpdatedAt:	time.Now().String(),
	}

	k.Keeper.SetPost(ctx, newPost)

	newTopicPosts := append(topicPosts.Posts, newPostId.PostId)
	k.Keeper.SetTopicPost(ctx, types.TopicPost{
		TopicId:	msg.TopicId,
		Posts:		newTopicPosts,
	})

	newPostId.PostId++
	k.Keeper.SetPostId(ctx, newPostId)

	return &types.MsgCreatePostResponse{ PostId: newPostId.PostId }, nil
}
