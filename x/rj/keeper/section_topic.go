package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

// SetSectionTopic set a specific sectionTopic in the store from its index
func (k Keeper) SetSectionTopic(ctx sdk.Context, sectionTopic types.SectionTopic) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionTopicKeyPrefix))
	b := k.cdc.MustMarshal(&sectionTopic)
	store.Set(types.SectionTopicKey(
		sectionTopic.SectionId,
	), b)
}

// GetSectionTopic returns a sectionTopic from its index
func (k Keeper) GetSectionTopic(
	ctx sdk.Context,
	sectionId uint64,

) (val types.SectionTopic, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionTopicKeyPrefix))

	b := store.Get(types.SectionTopicKey(
		sectionId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSectionTopic removes a sectionTopic from the store
func (k Keeper) RemoveSectionTopic(
	ctx sdk.Context,
	sectionId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionTopicKeyPrefix))
	store.Delete(types.SectionTopicKey(
		sectionId,
	))
}

// GetAllSectionTopic returns all sectionTopic
func (k Keeper) GetAllSectionTopic(ctx sdk.Context) (list []types.SectionTopic) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SectionTopicKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SectionTopic
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
