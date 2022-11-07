/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../rj/params";
import { SectionId } from "../rj/section_id";
import { TopicId } from "../rj/topic_id";
import { PostId } from "../rj/post_id";

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
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
