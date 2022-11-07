package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

// SetTopicPost set a specific topicPost in the store from its index
func (k Keeper) SetTopicPost(ctx sdk.Context, topicPost types.TopicPost) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicPostKeyPrefix))
	b := k.cdc.MustMarshal(&topicPost)
	store.Set(types.TopicPostKey(
		topicPost.TopicId,
	), b)
}

// GetTopicPost returns a topicPost from its index
func (k Keeper) GetTopicPost(
	ctx sdk.Context,
	topicId uint64,

) (val types.TopicPost, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicPostKeyPrefix))

	b := store.Get(types.TopicPostKey(
		topicId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTopicPost removes a topicPost from the store
func (k Keeper) RemoveTopicPost(
	ctx sdk.Context,
	topicId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicPostKeyPrefix))
	store.Delete(types.TopicPostKey(
		topicId,
	))
}

// GetAllTopicPost returns all topicPost
func (k Keeper) GetAllTopicPost(ctx sdk.Context) (list []types.TopicPost) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicPostKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TopicPost
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
