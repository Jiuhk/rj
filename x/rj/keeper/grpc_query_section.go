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

func (k Keeper) SectionAll(c context.Context, req *types.QueryAllSectionRequest) (*types.QueryAllSectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sections []types.Section
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sectionStore := prefix.NewStore(store, types.KeyPrefix(types.SectionKeyPrefix))

	pageRes, err := query.Paginate(sectionStore, req.Pagination, func(key []byte, value []byte) error {
		var section types.Section
		if err := k.cdc.Unmarshal(value, &section); err != nil {
			return err
		}

		sections = append(sections, section)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSectionResponse{Section: sections, Pagination: pageRes}, nil
}

func (k Keeper) Section(c context.Context, req *types.QueryGetSectionRequest) (*types.QueryGetSectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSection(
		ctx,
		req.SectionId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetSectionResponse{Section: val}, nil
}
