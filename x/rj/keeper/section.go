package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

// SetSection set a specific section in the store from its index
func (k Keeper) SetSection(ctx sdk.Context, section types.Section) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKeyPrefix))
	b := k.cdc.MustMarshal(&section)
	store.Set(types.SectionKey(
		section.SectionId,
	), b)
}

// GetSection returns a section from its index
func (k Keeper) GetSection(
	ctx sdk.Context,
	sectionId uint64,

) (val types.Section, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKeyPrefix))

	b := store.Get(types.SectionKey(
		sectionId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSection removes a section from the store
func (k Keeper) RemoveSection(
	ctx sdk.Context,
	sectionId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKeyPrefix))
	store.Delete(types.SectionKey(
		sectionId,
	))
}

// GetAllSection returns all section
func (k Keeper) GetAllSection(ctx sdk.Context) (list []types.Section) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Section
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
