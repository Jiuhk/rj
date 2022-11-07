package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"rj/x/rj/types"
)

// SetPostId set postId in the store
func (k Keeper) SetPostId(ctx sdk.Context, postId types.PostId) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PostIdKey))
	b := k.cdc.MustMarshal(&postId)
	store.Set([]byte{0}, b)
}

// GetPostId returns postId
func (k Keeper) GetPostId(ctx sdk.Context) (val types.PostId, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PostIdKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePostId removes postId from the store
func (k Keeper) RemovePostId(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PostIdKey))
	store.Delete([]byte{0})
}
