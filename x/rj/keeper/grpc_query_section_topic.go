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

func (k Keeper) SectionTopicAll(c context.Context, req *types.QueryAllSectionTopicRequest) (*types.QueryAllSectionTopicResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sectionTopics []types.SectionTopic
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sectionTopicStore := prefix.NewStore(store, types.KeyPrefix(types.SectionTopicKeyPrefix))

	pageRes, err := query.Paginate(sectionTopicStore, req.Pagination, func(key []byte, value []byte) error {
		var sectionTopic types.SectionTopic
		if err := k.cdc.Unmarshal(value, &sectionTopic); err != nil {
			return err
		}

		sectionTopics = append(sectionTopics, sectionTopic)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSectionTopicResponse{SectionTopic: sectionTopics, Pagination: pageRes}, nil
}

func (k Keeper) SectionTopic(c context.Context, req *types.QueryGetSectionTopicRequest) (*types.QueryGetSectionTopicResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSectionTopic(
		ctx,
		req.SectionId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetSectionTopicResponse{SectionTopic: val}, nil
}
