package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"rj/x/rj/types"
)

func (k Keeper) TopicPostAll(c context.Context, req *types.QueryAllTopicPostRequest) (*types.QueryAllTopicPostResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var topicPosts []types.TopicPost
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	topicPostStore := prefix.NewStore(store, types.KeyPrefix(types.TopicPostKeyPrefix))

	pageRes, err := query.Paginate(topicPostStore, req.Pagination, func(key []byte, value []byte) error {
		var topicPost types.TopicPost
		if err := k.cdc.Unmarshal(value, &topicPost); err != nil {
			return err
		}

		topicPosts = append(topicPosts, topicPost)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTopicPostResponse{TopicPost: topicPosts, Pagination: pageRes}, nil
}

func (k Keeper) TopicPost(c context.Context, req *types.QueryGetTopicPostRequest) (*types.QueryGetTopicPostResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetTopicPost(
		ctx,
		req.TopicId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetTopicPostResponse{TopicPost: val}, nil
}
