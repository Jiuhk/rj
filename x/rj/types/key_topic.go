package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TopicKeyPrefix is the prefix to retrieve all Topic
	TopicKeyPrefix = "Topic/value/"
)

// TopicKey returns the store key to retrieve a Topic from the index fields
func TopicKey(
	topicId uint64,
) []byte {
	var key []byte

	topicIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(topicIdBytes, topicId)
	key = append(key, topicIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
