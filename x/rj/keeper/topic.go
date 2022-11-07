package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

// SetTopic set a specific topic in the store from its index
func (k Keeper) SetTopic(ctx sdk.Context, topic types.Topic) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKeyPrefix))
	b := k.cdc.MustMarshal(&topic)
	store.Set(types.TopicKey(
		topic.TopicId,
	), b)
}

// GetTopic returns a topic from its index
func (k Keeper) GetTopic(
	ctx sdk.Context,
	topicId uint64,

) (val types.Topic, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKeyPrefix))

	b := store.Get(types.TopicKey(
		topicId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTopic removes a topic from the store
func (k Keeper) RemoveTopic(
	ctx sdk.Context,
	topicId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKeyPrefix))
	store.Delete(types.TopicKey(
		topicId,
	))
}

// GetAllTopic returns all topic
func (k Keeper) GetAllTopic(ctx sdk.Context) (list []types.Topic) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Topic
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
