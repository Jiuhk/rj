package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

// SetTopicId set topicId in the store
func (k Keeper) SetTopicId(ctx sdk.Context, topicId types.TopicId) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicIdKey))
	b := k.cdc.MustMarshal(&topicId)
	store.Set([]byte{0}, b)
}

// GetTopicId returns topicId
func (k Keeper) GetTopicId(ctx sdk.Context) (val types.TopicId, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicIdKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTopicId removes topicId from the store
func (k Keeper) RemoveTopicId(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicIdKey))
	store.Delete([]byte{0})
}
