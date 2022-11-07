// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: rj/topic_post.proto

package types

import (
	fmt "fmt"
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

type TopicPost struct {
	TopicId uint64   `protobuf:"varint,1,opt,name=topicId,proto3" json:"topicId,omitempty"`
	Posts   []uint64 `protobuf:"varint,2,rep,packed,name=posts,proto3" json:"posts,omitempty"`
}

func (m *TopicPost) Reset()         { *m = TopicPost{} }
func (m *TopicPost) String() string { return proto.CompactTextString(m) }
func (*TopicPost) ProtoMessage()    {}
func (*TopicPost) Descriptor() ([]byte, []int) {
	return fileDescriptor_35a59611c72f0fa2, []int{0}
}
func (m *TopicPost) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TopicPost) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TopicPost.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TopicPost) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TopicPost.Merge(m, src)
}
func (m *TopicPost) XXX_Size() int {
	return m.Size()
}
func (m *TopicPost) XXX_DiscardUnknown() {
	xxx_messageInfo_TopicPost.DiscardUnknown(m)
}

var xxx_messageInfo_TopicPost proto.InternalMessageInfo

func (m *TopicPost) GetTopicId() uint64 {
	if m != nil {
		return m.TopicId
	}
	return 0
}

func (m *TopicPost) GetPosts() []uint64 {
	if m != nil {
		return m.Posts
	}
	return nil
}

func init() {
	proto.RegisterType((*TopicPost)(nil), "rj.rj.TopicPost")
}

func init() { proto.RegisterFile("rj/topic_post.proto", fileDescriptor_35a59611c72f0fa2) }

var fileDescriptor_35a59611c72f0fa2 = []byte{
	// 141 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2e, 0xca, 0xd2, 0x2f,
	0xc9, 0x2f, 0xc8, 0x4c, 0x8e, 0x2f, 0xc8, 0x2f, 0x2e, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17,
	0x62, 0x2d, 0xca, 0xd2, 0x2b, 0xca, 0x52, 0xb2, 0xe6, 0xe2, 0x0c, 0x01, 0x49, 0x05, 0xe4, 0x17,
	0x97, 0x08, 0x49, 0x70, 0xb1, 0x83, 0xd5, 0x79, 0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0xb0, 0x04,
	0xc1, 0xb8, 0x42, 0x22, 0x5c, 0xac, 0x20, 0xbd, 0xc5, 0x12, 0x4c, 0x0a, 0xcc, 0x1a, 0x2c, 0x41,
	0x10, 0x8e, 0x93, 0xfa, 0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7,
	0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7, 0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0xf1, 0x16,
	0x65, 0xe9, 0x57, 0xe8, 0x83, 0xec, 0xad, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0xdb, 0x69, 0x0c,
	0x08, 0x00, 0x00, 0xff, 0xff, 0xbc, 0xdc, 0xf9, 0xc0, 0x8a, 0x00, 0x00, 0x00,
}

func (m *TopicPost) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TopicPost) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TopicPost) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Posts) > 0 {
		dAtA2 := make([]byte, len(m.Posts)*10)
		var j1 int
		for _, num := range m.Posts {
			for num >= 1<<7 {
				dAtA2[j1] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j1++
			}
			dAtA2[j1] = uint8(num)
			j1++
		}
		i -= j1
		copy(dAtA[i:], dAtA2[:j1])
		i = encodeVarintTopicPost(dAtA, i, uint64(j1))
		i--
		dAtA[i] = 0x12
	}
	if m.TopicId != 0 {
		i = encodeVarintTopicPost(dAtA, i, uint64(m.TopicId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintTopicPost(dAtA []byte, offset int, v uint64) int {
	offset -= sovTopicPost(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *TopicPost) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.TopicId != 0 {
		n += 1 + sovTopicPost(uint64(m.TopicId))
	}
	if len(m.Posts) > 0 {
		l = 0
		for _, e := range m.Posts {
			l += sovTopicPost(uint64(e))
		}
		n += 1 + sovTopicPost(uint64(l)) + l
	}
	return n
}

func sovTopicPost(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTopicPost(x uint64) (n int) {
	return sovTopicPost(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *TopicPost) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTopicPost
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
			return fmt.Errorf("proto: TopicPost: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TopicPost: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TopicId", wireType)
			}
			m.TopicId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTopicPost
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TopicId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType == 0 {
				var v uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowTopicPost
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				m.Posts = append(m.Posts, v)
			} else if wireType == 2 {
				var packedLen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowTopicPost
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					packedLen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if packedLen < 0 {
					return ErrInvalidLengthTopicPost
				}
				postIndex := iNdEx + packedLen
				if postIndex < 0 {
					return ErrInvalidLengthTopicPost
				}
				if postIndex > l {
					return io.ErrUnexpectedEOF
				}
				var elementCount int
				var count int
				for _, integer := range dAtA[iNdEx:postIndex] {
					if integer < 128 {
						count++
					}
				}
				elementCount = count
				if elementCount != 0 && len(m.Posts) == 0 {
					m.Posts = make([]uint64, 0, elementCount)
				}
				for iNdEx < postIndex {
					var v uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowTopicPost
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						v |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					m.Posts = append(m.Posts, v)
				}
			} else {
				return fmt.Errorf("proto: wrong wireType = %d for field Posts", wireType)
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTopicPost(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTopicPost
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
func skipTopicPost(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTopicPost
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
					return 0, ErrIntOverflowTopicPost
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
					return 0, ErrIntOverflowTopicPost
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
				return 0, ErrInvalidLengthTopicPost
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTopicPost
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTopicPost
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTopicPost        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTopicPost          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTopicPost = fmt.Errorf("proto: unexpected end of group")
)