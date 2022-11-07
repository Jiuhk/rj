package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SectionTopicKeyPrefix is the prefix to retrieve all SectionTopic
	SectionTopicKeyPrefix = "SectionTopic/value/"
)

// SectionTopicKey returns the store key to retrieve a SectionTopic from the index fields
func SectionTopicKey(
	sectionId uint64,
) []byte {
	var key []byte

	sectionIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(sectionIdBytes, sectionId)
	key = append(key, sectionIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
