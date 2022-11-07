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

func (k Keeper) TopicAll(c context.Context, req *types.QueryAllTopicRequest) (*types.QueryAllTopicResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var topics []types.Topic
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	topicStore := prefix.NewStore(store, types.KeyPrefix(types.TopicKeyPrefix))

	pageRes, err := query.Paginate(topicStore, req.Pagination, func(key []byte, value []byte) error {
		var topic types.Topic
		if err := k.cdc.Unmarshal(value, &topic); err != nil {
			return err
		}

		topics = append(topics, topic)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTopicResponse{Topic: topics, Pagination: pageRes}, nil
}

func (k Keeper) Topic(c context.Context, req *types.QueryGetTopicRequest) (*types.QueryGetTopicResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetTopic(
		ctx,
		req.TopicId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetTopicResponse{Topic: val}, nil
}
