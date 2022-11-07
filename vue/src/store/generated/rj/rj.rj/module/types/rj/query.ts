/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../rj/params";
import { SectionId } from "../rj/section_id";
import { TopicId } from "../rj/topic_id";
import { PostId } from "../rj/post_id";
import { Section } from "../rj/section";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Topic } from "../rj/topic";
import { Post } from "../rj/post";
import { SectionTopic } from "../rj/section_topic";
import { TopicPost } from "../rj/topic_post";

export const protobufPackage = "rj.rj";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSectionIdRequest {}

export interface QueryGetSectionIdResponse {
  SectionId: SectionId | undefined;
}

export interface QueryGetTopicIdRequest {}

export interface QueryGetTopicIdResponse {
  TopicId: TopicId | undefined;
}

export interface QueryGetPostIdRequest {}

export interface QueryGetPostIdResponse {
  PostId: PostId | undefined;
}

export interface QueryGetSectionRequest {
  sectionId: number;
}

export interface QueryGetSectionResponse {
  section: Section | undefined;
}

export interface QueryAllSectionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSectionResponse {
  section: Section[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTopicRequest {
  topicId: number;
}

export interface QueryGetTopicResponse {
  topic: Topic | undefined;
}

export interface QueryAllTopicRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTopicResponse {
  topic: Topic[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPostRequest {
  postId: number;
}

export interface QueryGetPostResponse {
  post: Post | undefined;
}

export interface QueryAllPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPostResponse {
  post: Post[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSectionTopicRequest {
  sectionId: number;
}

export interface QueryGetSectionTopicResponse {
  sectionTopic: SectionTopic | undefined;
}

export interface QueryAllSectionTopicRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSectionTopicResponse {
  sectionTopic: SectionTopic[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTopicPostRequest {
  topicId: number;
}

export interface QueryGetTopicPostResponse {
  topicPost: TopicPost | undefined;
}

export interface QueryAllTopicPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTopicPostResponse {
  topicPost: TopicPost[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetSectionIdRequest: object = {};

export const QueryGetSectionIdRequest = {
  encode(
    _: QueryGetSectionIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSectionIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSectionIdRequest,
    } as QueryGetSectionIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetSectionIdRequest {
    const message = {
      ...baseQueryGetSectionIdRequest,
    } as QueryGetSectionIdRequest;
    return message;
  },

  toJSON(_: QueryGetSectionIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetSectionIdRequest>
  ): QueryGetSectionIdRequest {
    const message = {
      ...baseQueryGetSectionIdRequest,
    } as QueryGetSectionIdRequest;
    return message;
  },
};

const baseQueryGetSectionIdResponse: object = {};

export const QueryGetSectionIdResponse = {
  encode(
    message: QueryGetSectionIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SectionId !== undefined) {
      SectionId.encode(message.SectionId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSectionIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSectionIdResponse,
    } as QueryGetSectionIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SectionId = SectionId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSectionIdResponse {
    const message = {
      ...baseQueryGetSectionIdResponse,
    } as QueryGetSectionIdResponse;
    if (object.SectionId !== undefined && object.SectionId !== null) {
      message.SectionId = SectionId.fromJSON(object.SectionId);
    } else {
      message.SectionId = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSectionIdResponse): unknown {
    const obj: any = {};
    message.SectionId !== undefined &&
      (obj.SectionId = message.SectionId
        ? SectionId.toJSON(message.SectionId)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSectionIdResponse>
  ): QueryGetSectionIdResponse {
    const message = {
      ...baseQueryGetSectionIdResponse,
    } as QueryGetSectionIdResponse;
    if (object.SectionId !== undefined && object.SectionId !== null) {
      message.SectionId = SectionId.fromPartial(object.SectionId);
    } else {
      message.SectionId = undefined;
    }
    return message;
  },
};

const baseQueryGetTopicIdRequest: object = {};

export const QueryGetTopicIdRequest = {
  encode(_: QueryGetTopicIdRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTopicIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTopicIdRequest } as QueryGetTopicIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetTopicIdRequest {
    const message = { ...baseQueryGetTopicIdRequest } as QueryGetTopicIdRequest;
    return message;
  },

  toJSON(_: QueryGetTopicIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetTopicIdRequest>): QueryGetTopicIdRequest {
    const message = { ...baseQueryGetTopicIdRequest } as QueryGetTopicIdRequest;
    return message;
  },
};

const baseQueryGetTopicIdResponse: object = {};

export const QueryGetTopicIdResponse = {
  encode(
    message: QueryGetTopicIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.TopicId !== undefined) {
      TopicId.encode(message.TopicId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTopicIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTopicIdResponse,
    } as QueryGetTopicIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TopicId = TopicId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTopicIdResponse {
    const message = {
      ...baseQueryGetTopicIdResponse,
    } as QueryGetTopicIdResponse;
    if (object.TopicId !== undefined && object.TopicId !== null) {
      message.TopicId = TopicId.fromJSON(object.TopicId);
    } else {
      message.TopicId = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTopicIdResponse): unknown {
    const obj: any = {};
    message.TopicId !== undefined &&
      (obj.TopicId = message.TopicId
        ? TopicId.toJSON(message.TopicId)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTopicIdResponse>
  ): QueryGetTopicIdResponse {
    const message = {
      ...baseQueryGetTopicIdResponse,
    } as QueryGetTopicIdResponse;
    if (object.TopicId !== undefined && object.TopicId !== null) {
      message.TopicId = TopicId.fromPartial(object.TopicId);
    } else {
      message.TopicId = undefined;
    }
    return message;
  },
};

const baseQueryGetPostIdRequest: object = {};

export const QueryGetPostIdRequest = {
  encode(_: QueryGetPostIdRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostIdRequest } as QueryGetPostIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetPostIdRequest {
    const message = { ...baseQueryGetPostIdRequest } as QueryGetPostIdRequest;
    return message;
  },

  toJSON(_: QueryGetPostIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetPostIdRequest>): QueryGetPostIdRequest {
    const message = { ...baseQueryGetPostIdRequest } as QueryGetPostIdRequest;
    return message;
  },
};

const baseQueryGetPostIdResponse: object = {};

export const QueryGetPostIdResponse = {
  encode(
    message: QueryGetPostIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.PostId !== undefined) {
      PostId.encode(message.PostId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostIdResponse } as QueryGetPostIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PostId = PostId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostIdResponse {
    const message = { ...baseQueryGetPostIdResponse } as QueryGetPostIdResponse;
    if (object.PostId !== undefined && object.PostId !== null) {
      message.PostId = PostId.fromJSON(object.PostId);
    } else {
      message.PostId = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPostIdResponse): unknown {
    const obj: any = {};
    message.PostId !== undefined &&
      (obj.PostId = message.PostId ? PostId.toJSON(message.PostId) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPostIdResponse>
  ): QueryGetPostIdResponse {
    const message = { ...baseQueryGetPostIdResponse } as QueryGetPostIdResponse;
    if (object.PostId !== undefined && object.PostId !== null) {
      message.PostId = PostId.fromPartial(object.PostId);
    } else {
      message.PostId = undefined;
    }
    return message;
  },
};

const baseQueryGetSectionRequest: object = { sectionId: 0 };

export const QueryGetSectionRequest = {
  encode(
    message: QueryGetSectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sectionId !== 0) {
      writer.uint32(8).uint64(message.sectionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSectionRequest } as QueryGetSectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSectionRequest {
    const message = { ...baseQueryGetSectionRequest } as QueryGetSectionRequest;
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = Number(object.sectionId);
    } else {
      message.sectionId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSectionRequest): unknown {
    const obj: any = {};
    message.sectionId !== undefined && (obj.sectionId = message.sectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSectionRequest>
  ): QueryGetSectionRequest {
    const message = { ...baseQueryGetSectionRequest } as QueryGetSectionRequest;
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = object.sectionId;
    } else {
      message.sectionId = 0;
    }
    return message;
  },
};

const baseQueryGetSectionResponse: object = {};

export const QueryGetSectionResponse = {
  encode(
    message: QueryGetSectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.section !== undefined) {
      Section.encode(message.section, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSectionResponse,
    } as QueryGetSectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.section = Section.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSectionResponse {
    const message = {
      ...baseQueryGetSectionResponse,
    } as QueryGetSectionResponse;
    if (object.section !== undefined && object.section !== null) {
      message.section = Section.fromJSON(object.section);
    } else {
      message.section = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSectionResponse): unknown {
    const obj: any = {};
    message.section !== undefined &&
      (obj.section = message.section
        ? Section.toJSON(message.section)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSectionResponse>
  ): QueryGetSectionResponse {
    const message = {
      ...baseQueryGetSectionResponse,
    } as QueryGetSectionResponse;
    if (object.section !== undefined && object.section !== null) {
      message.section = Section.fromPartial(object.section);
    } else {
      message.section = undefined;
    }
    return message;
  },
};

const baseQueryAllSectionRequest: object = {};

export const QueryAllSectionRequest = {
  encode(
    message: QueryAllSectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSectionRequest } as QueryAllSectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSectionRequest {
    const message = { ...baseQueryAllSectionRequest } as QueryAllSectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSectionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSectionRequest>
  ): QueryAllSectionRequest {
    const message = { ...baseQueryAllSectionRequest } as QueryAllSectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSectionResponse: object = {};

export const QueryAllSectionResponse = {
  encode(
    message: QueryAllSectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.section) {
      Section.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSectionResponse,
    } as QueryAllSectionResponse;
    message.section = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.section.push(Section.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSectionResponse {
    const message = {
      ...baseQueryAllSectionResponse,
    } as QueryAllSectionResponse;
    message.section = [];
    if (object.section !== undefined && object.section !== null) {
      for (const e of object.section) {
        message.section.push(Section.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSectionResponse): unknown {
    const obj: any = {};
    if (message.section) {
      obj.section = message.section.map((e) =>
        e ? Section.toJSON(e) : undefined
      );
    } else {
      obj.section = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSectionResponse>
  ): QueryAllSectionResponse {
    const message = {
      ...baseQueryAllSectionResponse,
    } as QueryAllSectionResponse;
    message.section = [];
    if (object.section !== undefined && object.section !== null) {
      for (const e of object.section) {
        message.section.push(Section.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTopicRequest: object = { topicId: 0 };

export const QueryGetTopicRequest = {
  encode(
    message: QueryGetTopicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.topicId !== 0) {
      writer.uint32(8).uint64(message.topicId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTopicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTopicRequest } as QueryGetTopicRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topicId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTopicRequest {
    const message = { ...baseQueryGetTopicRequest } as QueryGetTopicRequest;
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = Number(object.topicId);
    } else {
      message.topicId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTopicRequest): unknown {
    const obj: any = {};
    message.topicId !== undefined && (obj.topicId = message.topicId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTopicRequest>): QueryGetTopicRequest {
    const message = { ...baseQueryGetTopicRequest } as QueryGetTopicRequest;
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = object.topicId;
    } else {
      message.topicId = 0;
    }
    return message;
  },
};

const baseQueryGetTopicResponse: object = {};

export const QueryGetTopicResponse = {
  encode(
    message: QueryGetTopicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.topic !== undefined) {
      Topic.encode(message.topic, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTopicResponse } as QueryGetTopicResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = Topic.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTopicResponse {
    const message = { ...baseQueryGetTopicResponse } as QueryGetTopicResponse;
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = Topic.fromJSON(object.topic);
    } else {
      message.topic = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTopicResponse): unknown {
    const obj: any = {};
    message.topic !== undefined &&
      (obj.topic = message.topic ? Topic.toJSON(message.topic) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTopicResponse>
  ): QueryGetTopicResponse {
    const message = { ...baseQueryGetTopicResponse } as QueryGetTopicResponse;
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = Topic.fromPartial(object.topic);
    } else {
      message.topic = undefined;
    }
    return message;
  },
};

const baseQueryAllTopicRequest: object = {};

export const QueryAllTopicRequest = {
  encode(
    message: QueryAllTopicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTopicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTopicRequest } as QueryAllTopicRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTopicRequest {
    const message = { ...baseQueryAllTopicRequest } as QueryAllTopicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTopicRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllTopicRequest>): QueryAllTopicRequest {
    const message = { ...baseQueryAllTopicRequest } as QueryAllTopicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTopicResponse: object = {};

export const QueryAllTopicResponse = {
  encode(
    message: QueryAllTopicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.topic) {
      Topic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTopicResponse } as QueryAllTopicResponse;
    message.topic = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic.push(Topic.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTopicResponse {
    const message = { ...baseQueryAllTopicResponse } as QueryAllTopicResponse;
    message.topic = [];
    if (object.topic !== undefined && object.topic !== null) {
      for (const e of object.topic) {
        message.topic.push(Topic.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTopicResponse): unknown {
    const obj: any = {};
    if (message.topic) {
      obj.topic = message.topic.map((e) => (e ? Topic.toJSON(e) : undefined));
    } else {
      obj.topic = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTopicResponse>
  ): QueryAllTopicResponse {
    const message = { ...baseQueryAllTopicResponse } as QueryAllTopicResponse;
    message.topic = [];
    if (object.topic !== undefined && object.topic !== null) {
      for (const e of object.topic) {
        message.topic.push(Topic.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPostRequest: object = { postId: 0 };

export const QueryGetPostRequest = {
  encode(
    message: QueryGetPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.postId !== 0) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = Number(object.postId);
    } else {
      message.postId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPostRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId;
    } else {
      message.postId = 0;
    }
    return message;
  },
};

const baseQueryGetPostResponse: object = {};

export const QueryGetPostResponse = {
  encode(
    message: QueryGetPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromJSON(object.post);
    } else {
      message.post = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPostResponse): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromPartial(object.post);
    } else {
      message.post = undefined;
    }
    return message;
  },
};

const baseQueryAllPostRequest: object = {};

export const QueryAllPostRequest = {
  encode(
    message: QueryAllPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPostResponse: object = {};

export const QueryAllPostResponse = {
  encode(
    message: QueryAllPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.post = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.post = [];
    if (object.post !== undefined && object.post !== null) {
      for (const e of object.post) {
        message.post.push(Post.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPostResponse): unknown {
    const obj: any = {};
    if (message.post) {
      obj.post = message.post.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.post = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.post = [];
    if (object.post !== undefined && object.post !== null) {
      for (const e of object.post) {
        message.post.push(Post.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSectionTopicRequest: object = { sectionId: 0 };

export const QueryGetSectionTopicRequest = {
  encode(
    message: QueryGetSectionTopicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sectionId !== 0) {
      writer.uint32(8).uint64(message.sectionId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSectionTopicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSectionTopicRequest,
    } as QueryGetSectionTopicRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSectionTopicRequest {
    const message = {
      ...baseQueryGetSectionTopicRequest,
    } as QueryGetSectionTopicRequest;
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = Number(object.sectionId);
    } else {
      message.sectionId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSectionTopicRequest): unknown {
    const obj: any = {};
    message.sectionId !== undefined && (obj.sectionId = message.sectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSectionTopicRequest>
  ): QueryGetSectionTopicRequest {
    const message = {
      ...baseQueryGetSectionTopicRequest,
    } as QueryGetSectionTopicRequest;
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = object.sectionId;
    } else {
      message.sectionId = 0;
    }
    return message;
  },
};

const baseQueryGetSectionTopicResponse: object = {};

export const QueryGetSectionTopicResponse = {
  encode(
    message: QueryGetSectionTopicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sectionTopic !== undefined) {
      SectionTopic.encode(
        message.sectionTopic,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSectionTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSectionTopicResponse,
    } as QueryGetSectionTopicResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionTopic = SectionTopic.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSectionTopicResponse {
    const message = {
      ...baseQueryGetSectionTopicResponse,
    } as QueryGetSectionTopicResponse;
    if (object.sectionTopic !== undefined && object.sectionTopic !== null) {
      message.sectionTopic = SectionTopic.fromJSON(object.sectionTopic);
    } else {
      message.sectionTopic = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSectionTopicResponse): unknown {
    const obj: any = {};
    message.sectionTopic !== undefined &&
      (obj.sectionTopic = message.sectionTopic
        ? SectionTopic.toJSON(message.sectionTopic)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSectionTopicResponse>
  ): QueryGetSectionTopicResponse {
    const message = {
      ...baseQueryGetSectionTopicResponse,
    } as QueryGetSectionTopicResponse;
    if (object.sectionTopic !== undefined && object.sectionTopic !== null) {
      message.sectionTopic = SectionTopic.fromPartial(object.sectionTopic);
    } else {
      message.sectionTopic = undefined;
    }
    return message;
  },
};

const baseQueryAllSectionTopicRequest: object = {};

export const QueryAllSectionTopicRequest = {
  encode(
    message: QueryAllSectionTopicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSectionTopicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSectionTopicRequest,
    } as QueryAllSectionTopicRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSectionTopicRequest {
    const message = {
      ...baseQueryAllSectionTopicRequest,
    } as QueryAllSectionTopicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSectionTopicRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSectionTopicRequest>
  ): QueryAllSectionTopicRequest {
    const message = {
      ...baseQueryAllSectionTopicRequest,
    } as QueryAllSectionTopicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSectionTopicResponse: object = {};

export const QueryAllSectionTopicResponse = {
  encode(
    message: QueryAllSectionTopicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.sectionTopic) {
      SectionTopic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSectionTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSectionTopicResponse,
    } as QueryAllSectionTopicResponse;
    message.sectionTopic = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionTopic.push(
            SectionTopic.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSectionTopicResponse {
    const message = {
      ...baseQueryAllSectionTopicResponse,
    } as QueryAllSectionTopicResponse;
    message.sectionTopic = [];
    if (object.sectionTopic !== undefined && object.sectionTopic !== null) {
      for (const e of object.sectionTopic) {
        message.sectionTopic.push(SectionTopic.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSectionTopicResponse): unknown {
    const obj: any = {};
    if (message.sectionTopic) {
      obj.sectionTopic = message.sectionTopic.map((e) =>
        e ? SectionTopic.toJSON(e) : undefined
      );
    } else {
      obj.sectionTopic = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSectionTopicResponse>
  ): QueryAllSectionTopicResponse {
    const message = {
      ...baseQueryAllSectionTopicResponse,
    } as QueryAllSectionTopicResponse;
    message.sectionTopic = [];
    if (object.sectionTopic !== undefined && object.sectionTopic !== null) {
      for (const e of object.sectionTopic) {
        message.sectionTopic.push(SectionTopic.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTopicPostRequest: object = { topicId: 0 };

export const QueryGetTopicPostRequest = {
  encode(
    message: QueryGetTopicPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.topicId !== 0) {
      writer.uint32(8).uint64(message.topicId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTopicPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTopicPostRequest,
    } as QueryGetTopicPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topicId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTopicPostRequest {
    const message = {
      ...baseQueryGetTopicPostRequest,
    } as QueryGetTopicPostRequest;
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = Number(object.topicId);
    } else {
      message.topicId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTopicPostRequest): unknown {
    const obj: any = {};
    message.topicId !== undefined && (obj.topicId = message.topicId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTopicPostRequest>
  ): QueryGetTopicPostRequest {
    const message = {
      ...baseQueryGetTopicPostRequest,
    } as QueryGetTopicPostRequest;
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = object.topicId;
    } else {
      message.topicId = 0;
    }
    return message;
  },
};

const baseQueryGetTopicPostResponse: object = {};

export const QueryGetTopicPostResponse = {
  encode(
    message: QueryGetTopicPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.topicPost !== undefined) {
      TopicPost.encode(message.topicPost, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTopicPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTopicPostResponse,
    } as QueryGetTopicPostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topicPost = TopicPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTopicPostResponse {
    const message = {
      ...baseQueryGetTopicPostResponse,
    } as QueryGetTopicPostResponse;
    if (object.topicPost !== undefined && object.topicPost !== null) {
      message.topicPost = TopicPost.fromJSON(object.topicPost);
    } else {
      message.topicPost = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTopicPostResponse): unknown {
    const obj: any = {};
    message.topicPost !== undefined &&
      (obj.topicPost = message.topicPost
        ? TopicPost.toJSON(message.topicPost)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTopicPostResponse>
  ): QueryGetTopicPostResponse {
    const message = {
      ...baseQueryGetTopicPostResponse,
    } as QueryGetTopicPostResponse;
    if (object.topicPost !== undefined && object.topicPost !== null) {
      message.topicPost = TopicPost.fromPartial(object.topicPost);
    } else {
      message.topicPost = undefined;
    }
    return message;
  },
};

const baseQueryAllTopicPostRequest: object = {};

export const QueryAllTopicPostRequest = {
  encode(
    message: QueryAllTopicPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTopicPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTopicPostRequest,
    } as QueryAllTopicPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTopicPostRequest {
    const message = {
      ...baseQueryAllTopicPostRequest,
    } as QueryAllTopicPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTopicPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTopicPostRequest>
  ): QueryAllTopicPostRequest {
    const message = {
      ...baseQueryAllTopicPostRequest,
    } as QueryAllTopicPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTopicPostResponse: object = {};

export const QueryAllTopicPostResponse = {
  encode(
    message: QueryAllTopicPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.topicPost) {
      TopicPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTopicPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTopicPostResponse,
    } as QueryAllTopicPostResponse;
    message.topicPost = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topicPost.push(TopicPost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTopicPostResponse {
    const message = {
      ...baseQueryAllTopicPostResponse,
    } as QueryAllTopicPostResponse;
    message.topicPost = [];
    if (object.topicPost !== undefined && object.topicPost !== null) {
      for (const e of object.topicPost) {
        message.topicPost.push(TopicPost.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTopicPostResponse): unknown {
    const obj: any = {};
    if (message.topicPost) {
      obj.topicPost = message.topicPost.map((e) =>
        e ? TopicPost.toJSON(e) : undefined
      );
    } else {
      obj.topicPost = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTopicPostResponse>
  ): QueryAllTopicPostResponse {
    const message = {
      ...baseQueryAllTopicPostResponse,
    } as QueryAllTopicPostResponse;
    message.topicPost = [];
    if (object.topicPost !== undefined && object.topicPost !== null) {
      for (const e of object.topicPost) {
        message.topicPost.push(TopicPost.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SectionId by index. */
  SectionId(
    request: QueryGetSectionIdRequest
  ): Promise<QueryGetSectionIdResponse>;
  /** Queries a TopicId by index. */
  TopicId(request: QueryGetTopicIdRequest): Promise<QueryGetTopicIdResponse>;
  /** Queries a PostId by index. */
  PostId(request: QueryGetPostIdRequest): Promise<QueryGetPostIdResponse>;
  /** Queries a Section by index. */
  Section(request: QueryGetSectionRequest): Promise<QueryGetSectionResponse>;
  /** Queries a list of Section items. */
  SectionAll(request: QueryAllSectionRequest): Promise<QueryAllSectionResponse>;
  /** Queries a Topic by index. */
  Topic(request: QueryGetTopicRequest): Promise<QueryGetTopicResponse>;
  /** Queries a list of Topic items. */
  TopicAll(request: QueryAllTopicRequest): Promise<QueryAllTopicResponse>;
  /** Queries a Post by index. */
  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
  /** Queries a list of Post items. */
  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
  /** Queries a SectionTopic by index. */
  SectionTopic(
    request: QueryGetSectionTopicRequest
  ): Promise<QueryGetSectionTopicResponse>;
  /** Queries a list of SectionTopic items. */
  SectionTopicAll(
    request: QueryAllSectionTopicRequest
  ): Promise<QueryAllSectionTopicResponse>;
  /** Queries a TopicPost by index. */
  TopicPost(
    request: QueryGetTopicPostRequest
  ): Promise<QueryGetTopicPostResponse>;
  /** Queries a list of TopicPost items. */
  TopicPostAll(
    request: QueryAllTopicPostRequest
  ): Promise<QueryAllTopicPostResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  SectionId(
    request: QueryGetSectionIdRequest
  ): Promise<QueryGetSectionIdResponse> {
    const data = QueryGetSectionIdRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "SectionId", data);
    return promise.then((data) =>
      QueryGetSectionIdResponse.decode(new Reader(data))
    );
  }

  TopicId(request: QueryGetTopicIdRequest): Promise<QueryGetTopicIdResponse> {
    const data = QueryGetTopicIdRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "TopicId", data);
    return promise.then((data) =>
      QueryGetTopicIdResponse.decode(new Reader(data))
    );
  }

  PostId(request: QueryGetPostIdRequest): Promise<QueryGetPostIdResponse> {
    const data = QueryGetPostIdRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "PostId", data);
    return promise.then((data) =>
      QueryGetPostIdResponse.decode(new Reader(data))
    );
  }

  Section(request: QueryGetSectionRequest): Promise<QueryGetSectionResponse> {
    const data = QueryGetSectionRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "Section", data);
    return promise.then((data) =>
      QueryGetSectionResponse.decode(new Reader(data))
    );
  }

  SectionAll(
    request: QueryAllSectionRequest
  ): Promise<QueryAllSectionResponse> {
    const data = QueryAllSectionRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "SectionAll", data);
    return promise.then((data) =>
      QueryAllSectionResponse.decode(new Reader(data))
    );
  }

  Topic(request: QueryGetTopicRequest): Promise<QueryGetTopicResponse> {
    const data = QueryGetTopicRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "Topic", data);
    return promise.then((data) =>
      QueryGetTopicResponse.decode(new Reader(data))
    );
  }

  TopicAll(request: QueryAllTopicRequest): Promise<QueryAllTopicResponse> {
    const data = QueryAllTopicRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "TopicAll", data);
    return promise.then((data) =>
      QueryAllTopicResponse.decode(new Reader(data))
    );
  }

  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse> {
    const data = QueryGetPostRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "Post", data);
    return promise.then((data) =>
      QueryGetPostResponse.decode(new Reader(data))
    );
  }

  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse> {
    const data = QueryAllPostRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "PostAll", data);
    return promise.then((data) =>
      QueryAllPostResponse.decode(new Reader(data))
    );
  }

  SectionTopic(
    request: QueryGetSectionTopicRequest
  ): Promise<QueryGetSectionTopicResponse> {
    const data = QueryGetSectionTopicRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "SectionTopic", data);
    return promise.then((data) =>
      QueryGetSectionTopicResponse.decode(new Reader(data))
    );
  }

  SectionTopicAll(
    request: QueryAllSectionTopicRequest
  ): Promise<QueryAllSectionTopicResponse> {
    const data = QueryAllSectionTopicRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "SectionTopicAll", data);
    return promise.then((data) =>
      QueryAllSectionTopicResponse.decode(new Reader(data))
    );
  }

  TopicPost(
    request: QueryGetTopicPostRequest
  ): Promise<QueryGetTopicPostResponse> {
    const data = QueryGetTopicPostRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "TopicPost", data);
    return promise.then((data) =>
      QueryGetTopicPostResponse.decode(new Reader(data))
    );
  }

  TopicPostAll(
    request: QueryAllTopicPostRequest
  ): Promise<QueryAllTopicPostResponse> {
    const data = QueryAllTopicPostRequest.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Query", "TopicPostAll", data);
    return promise.then((data) =>
      QueryAllTopicPostResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
