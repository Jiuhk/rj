package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TopicPostKeyPrefix is the prefix to retrieve all TopicPost
	TopicPostKeyPrefix = "TopicPost/value/"
)

// TopicPostKey returns the store key to retrieve a TopicPost from the index fields
func TopicPostKey(
	topicId uint64,
) []byte {
	var key []byte

	topicIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(topicIdBytes, topicId)
	key = append(key, topicIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
