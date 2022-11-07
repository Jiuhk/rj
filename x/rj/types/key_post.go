package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PostKeyPrefix is the prefix to retrieve all Post
	PostKeyPrefix = "Post/value/"
)

// PostKey returns the store key to retrieve a Post from the index fields
func PostKey(
	postId uint64,
) []byte {
	var key []byte

	postIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(postIdBytes, postId)
	key = append(key, postIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
