package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		SectionId:        &SectionId{ SectionId: uint64(DefaultIndex), },
		TopicId:          &TopicId{ TopicId: uint64(DefaultIndex), },
		PostId:           &PostId{ PostId: uint64(DefaultIndex), },
		SectionList:      []Section{},
		TopicList:        []Topic{},
		PostList:         []Post{},
		SectionTopicList: []SectionTopic{},
		TopicPostList:    []TopicPost{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in section
	sectionIndexMap := make(map[string]struct{})

	for _, elem := range gs.SectionList {
		index := string(SectionKey(elem.SectionId))
		if _, ok := sectionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for section")
		}
		sectionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in topic
	topicIndexMap := make(map[string]struct{})

	for _, elem := range gs.TopicList {
		index := string(TopicKey(elem.TopicId))
		if _, ok := topicIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for topic")
		}
		topicIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in post
	postIndexMap := make(map[string]struct{})

	for _, elem := range gs.PostList {
		index := string(PostKey(elem.PostId))
		if _, ok := postIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for post")
		}
		postIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in sectionTopic
	sectionTopicIndexMap := make(map[string]struct{})

	for _, elem := range gs.SectionTopicList {
		index := string(SectionTopicKey(elem.SectionId))
		if _, ok := sectionTopicIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for sectionTopic")
		}
		sectionTopicIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in topicPost
	topicPostIndexMap := make(map[string]struct{})

	for _, elem := range gs.TopicPostList {
		index := string(TopicPostKey(elem.TopicId))
		if _, ok := topicPostIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for topicPost")
		}
		topicPostIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
