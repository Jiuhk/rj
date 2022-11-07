package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SectionKeyPrefix is the prefix to retrieve all Section
	SectionKeyPrefix = "Section/value/"
)

// SectionKey returns the store key to retrieve a Section from the index fields
func SectionKey(
	sectionId uint64,
) []byte {
	var key []byte

	sectionIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(sectionIdBytes, sectionId)
	key = append(key, sectionIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
