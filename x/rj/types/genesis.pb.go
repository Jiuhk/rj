// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: rj/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the rj module's genesis state.
type GenesisState struct {
	Params           Params         `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	SectionId        *SectionId     `protobuf:"bytes,2,opt,name=sectionId,proto3" json:"sectionId,omitempty"`
	TopicId          *TopicId       `protobuf:"bytes,3,opt,name=topicId,proto3" json:"topicId,omitempty"`
	PostId           *PostId        `protobuf:"bytes,4,opt,name=postId,proto3" json:"postId,omitempty"`
	SectionList      []Section      `protobuf:"bytes,5,rep,name=sectionList,proto3" json:"sectionList"`
	TopicList        []Topic        `protobuf:"bytes,6,rep,name=topicList,proto3" json:"topicList"`
	PostList         []Post         `protobuf:"bytes,7,rep,name=postList,proto3" json:"postList"`
	SectionTopicList []SectionTopic `protobuf:"bytes,8,rep,name=sectionTopicList,proto3" json:"sectionTopicList"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_1ceea0f4d39cdff1, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetSectionId() *SectionId {
	if m != nil {
		return m.SectionId
	}
	return nil
}

func (m *GenesisState) GetTopicId() *TopicId {
	if m != nil {
		return m.TopicId
	}
	return nil
}

func (m *GenesisState) GetPostId() *PostId {
	if m != nil {
		return m.PostId
	}
	return nil
}

func (m *GenesisState) GetSectionList() []Section {
	if m != nil {
		return m.SectionList
	}
	return nil
}

func (m *GenesisState) GetTopicList() []Topic {
	if m != nil {
		return m.TopicList
	}
	return nil
}

func (m *GenesisState) GetPostList() []Post {
	if m != nil {
		return m.PostList
	}
	return nil
}

func (m *GenesisState) GetSectionTopicList() []SectionTopic {
	if m != nil {
		return m.SectionTopicList
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "rj.rj.GenesisState")
}

func init() { proto.RegisterFile("rj/genesis.proto", fileDescriptor_1ceea0f4d39cdff1) }

var fileDescriptor_1ceea0f4d39cdff1 = []byte{
	// 349 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x91, 0xcd, 0x4a, 0xc3, 0x40,
	0x14, 0x85, 0x13, 0xdb, 0xa6, 0xed, 0xf4, 0xc7, 0x3a, 0x15, 0x09, 0x5d, 0xc4, 0x22, 0x88, 0x05,
	0x31, 0x23, 0x0a, 0x3e, 0x40, 0x41, 0xa4, 0xe0, 0x42, 0xd2, 0xae, 0xdc, 0x48, 0x6d, 0x42, 0xc9,
	0x80, 0x9d, 0x30, 0x33, 0x0b, 0x7d, 0x0b, 0x1f, 0xc0, 0x07, 0xea, 0xb2, 0x4b, 0x57, 0x22, 0xed,
	0x8b, 0xc8, 0xdc, 0xdc, 0xb6, 0x13, 0xdc, 0x25, 0xe7, 0x7e, 0xe7, 0x9e, 0x33, 0x5c, 0xd2, 0x91,
	0x9c, 0xcd, 0x93, 0x45, 0xa2, 0x52, 0x15, 0x66, 0x52, 0x68, 0x41, 0x2b, 0x92, 0x87, 0x92, 0xf7,
	0x8e, 0xe7, 0x62, 0x2e, 0x40, 0x61, 0xe6, 0x2b, 0x1f, 0xf6, 0x0e, 0x25, 0x67, 0xd9, 0x54, 0x4e,
	0xdf, 0x90, 0xee, 0x75, 0x25, 0x67, 0x2a, 0x99, 0xe9, 0x54, 0x2c, 0x5e, 0xd2, 0x18, 0xc5, 0x23,
	0xc9, 0x99, 0x16, 0x59, 0x3a, 0xdb, 0x4b, 0x26, 0x27, 0x13, 0x4a, 0x17, 0x15, 0x74, 0xa2, 0xd2,
	0xde, 0xda, 0xf0, 0xbf, 0x85, 0x1e, 0xfc, 0x3d, 0xb1, 0xa2, 0x2c, 0xec, 0xec, 0xab, 0x44, 0x9a,
	0x0f, 0xf9, 0x13, 0xc6, 0x7a, 0xaa, 0x13, 0x7a, 0x49, 0xbc, 0xbc, 0xa3, 0xef, 0xf6, 0xdd, 0x41,
	0xe3, 0xa6, 0x15, 0xc2, 0x93, 0xc2, 0x27, 0x10, 0x87, 0xe5, 0xe5, 0xcf, 0xa9, 0x13, 0x21, 0x42,
	0x43, 0x52, 0xc7, 0xa5, 0xa3, 0xd8, 0x3f, 0x00, 0xbe, 0x83, 0xfc, 0x78, 0xab, 0x47, 0x7b, 0x84,
	0x0e, 0x48, 0x15, 0xc2, 0x47, 0xb1, 0x5f, 0x02, 0xba, 0x8d, 0xf4, 0x24, 0x57, 0xa3, 0xed, 0x98,
	0x9e, 0x13, 0xcf, 0xb4, 0x1f, 0xc5, 0x7e, 0xb9, 0x58, 0x03, 0xc4, 0x08, 0x87, 0xf4, 0x8e, 0x34,
	0x70, 0xfb, 0x63, 0xaa, 0xb4, 0x5f, 0xe9, 0x97, 0xac, 0xa5, 0x58, 0x01, 0x3b, 0xdb, 0x20, 0xbd,
	0x26, 0x75, 0x48, 0x02, 0x97, 0x07, 0xae, 0xa6, 0x5d, 0x05, 0x3d, 0x7b, 0x88, 0x5e, 0x91, 0x9a,
	0xc9, 0x04, 0x43, 0x15, 0x0c, 0x0d, 0xab, 0x12, 0xf2, 0x3b, 0x84, 0xde, 0x93, 0x0e, 0xe6, 0x4d,
	0x76, 0x39, 0x35, 0xb0, 0x75, 0x8b, 0xed, 0xec, 0xb8, 0x7f, 0x96, 0xe1, 0xc5, 0x72, 0x1d, 0xb8,
	0xab, 0x75, 0xe0, 0xfe, 0xae, 0x03, 0xf7, 0x73, 0x13, 0x38, 0xab, 0x4d, 0xe0, 0x7c, 0x6f, 0x02,
	0xe7, 0xd9, 0xdc, 0xf7, 0x9d, 0x99, 0xa3, 0x7f, 0x64, 0x89, 0x7a, 0xf5, 0xe0, 0x9c, 0xb7, 0x7f,
	0x01, 0x00, 0x00, 0xff, 0xff, 0xd1, 0x30, 0xf5, 0xfd, 0x93, 0x02, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.SectionTopicList) > 0 {
		for iNdEx := len(m.SectionTopicList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SectionTopicList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x42
		}
	}
	if len(m.PostList) > 0 {
		for iNdEx := len(m.PostList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PostList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x3a
		}
	}
	if len(m.TopicList) > 0 {
		for iNdEx := len(m.TopicList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.TopicList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if len(m.SectionList) > 0 {
		for iNdEx := len(m.SectionList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SectionList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if m.PostId != nil {
		{
			size, err := m.PostId.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if m.TopicId != nil {
		{
			size, err := m.TopicId.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1a
	}
	if m.SectionId != nil {
		{
			size, err := m.SectionId.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if m.SectionId != nil {
		l = m.SectionId.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.TopicId != nil {
		l = m.TopicId.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.PostId != nil {
		l = m.PostId.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.SectionList) > 0 {
		for _, e := range m.SectionList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.TopicList) > 0 {
		for _, e := range m.TopicList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.PostList) > 0 {
		for _, e := range m.PostList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.SectionTopicList) > 0 {
		for _, e := range m.SectionTopicList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SectionId", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.SectionId == nil {
				m.SectionId = &SectionId{}
			}
			if err := m.SectionId.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TopicId", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.TopicId == nil {
				m.TopicId = &TopicId{}
			}
			if err := m.TopicId.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PostId", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.PostId == nil {
				m.PostId = &PostId{}
			}
			if err := m.PostId.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SectionList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SectionList = append(m.SectionList, Section{})
			if err := m.SectionList[len(m.SectionList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TopicList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TopicList = append(m.TopicList, Topic{})
			if err := m.TopicList[len(m.TopicList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PostList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PostList = append(m.PostList, Post{})
			if err := m.PostList[len(m.PostList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SectionTopicList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SectionTopicList = append(m.SectionTopicList, SectionTopic{})
			if err := m.SectionTopicList[len(m.SectionTopicList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
