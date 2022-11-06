package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

// SetSectionId set sectionId in the store
func (k Keeper) SetSectionId(ctx sdk.Context, sectionId types.SectionId) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionIdKey))
	b := k.cdc.MustMarshal(&sectionId)
	store.Set([]byte{0}, b)
}

// GetSectionId returns sectionId
func (k Keeper) GetSectionId(ctx sdk.Context) (val types.SectionId, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionIdKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSectionId removes sectionId from the store
func (k Keeper) RemoveSectionId(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionIdKey))
	store.Delete([]byte{0})
}
