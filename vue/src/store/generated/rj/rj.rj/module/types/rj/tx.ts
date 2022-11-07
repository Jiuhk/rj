/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "rj.rj";

export interface MsgCreateTopic {
  creator: string;
  sectionId: number;
  title: string;
}

export interface MsgCreateTopicResponse {
  topicId: number;
}

export interface MsgCreatePost {
  creator: string;
  topicId: number;
  content: string;
}

export interface MsgCreatePostResponse {
  postId: number;
}

export interface MsgCreateSection {
  creator: string;
  name: string;
}

export interface MsgCreateSectionResponse {
  sectionId: number;
}

const baseMsgCreateTopic: object = { creator: "", sectionId: 0, title: "" };

export const MsgCreateTopic = {
  encode(message: MsgCreateTopic, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint64(message.sectionId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTopic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTopic } as MsgCreateTopic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sectionId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTopic {
    const message = { ...baseMsgCreateTopic } as MsgCreateTopic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = Number(object.sectionId);
    } else {
      message.sectionId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTopic): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sectionId !== undefined && (obj.sectionId = message.sectionId);
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTopic>): MsgCreateTopic {
    const message = { ...baseMsgCreateTopic } as MsgCreateTopic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = object.sectionId;
    } else {
      message.sectionId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    return message;
  },
};

const baseMsgCreateTopicResponse: object = { topicId: 0 };

export const MsgCreateTopicResponse = {
  encode(
    message: MsgCreateTopicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.topicId !== 0) {
      writer.uint32(8).uint64(message.topicId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTopicResponse } as MsgCreateTopicResponse;
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

  fromJSON(object: any): MsgCreateTopicResponse {
    const message = { ...baseMsgCreateTopicResponse } as MsgCreateTopicResponse;
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = Number(object.topicId);
    } else {
      message.topicId = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTopicResponse): unknown {
    const obj: any = {};
    message.topicId !== undefined && (obj.topicId = message.topicId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTopicResponse>
  ): MsgCreateTopicResponse {
    const message = { ...baseMsgCreateTopicResponse } as MsgCreateTopicResponse;
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = object.topicId;
    } else {
      message.topicId = 0;
    }
    return message;
  },
};

const baseMsgCreatePost: object = { creator: "", topicId: 0, content: "" };

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.topicId !== 0) {
      writer.uint32(16).uint64(message.topicId);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.topicId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = Number(object.topicId);
    } else {
      message.topicId = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.topicId !== undefined && (obj.topicId = message.topicId);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = object.topicId;
    } else {
      message.topicId = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    return message;
  },
};

const baseMsgCreatePostResponse: object = { postId: 0 };

export const MsgCreatePostResponse = {
  encode(
    message: MsgCreatePostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.postId !== 0) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
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

  fromJSON(object: any): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = Number(object.postId);
    } else {
      message.postId = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePostResponse): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePostResponse>
  ): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId;
    } else {
      message.postId = 0;
    }
    return message;
  },
};

const baseMsgCreateSection: object = { creator: "", name: "" };

export const MsgCreateSection = {
  encode(message: MsgCreateSection, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSection {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSection } as MsgCreateSection;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSection {
    const message = { ...baseMsgCreateSection } as MsgCreateSection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateSection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSection>): MsgCreateSection {
    const message = { ...baseMsgCreateSection } as MsgCreateSection;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgCreateSectionResponse: object = { sectionId: 0 };

export const MsgCreateSectionResponse = {
  encode(
    message: MsgCreateSectionResponse,
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
  ): MsgCreateSectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSectionResponse,
    } as MsgCreateSectionResponse;
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

  fromJSON(object: any): MsgCreateSectionResponse {
    const message = {
      ...baseMsgCreateSectionResponse,
    } as MsgCreateSectionResponse;
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = Number(object.sectionId);
    } else {
      message.sectionId = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSectionResponse): unknown {
    const obj: any = {};
    message.sectionId !== undefined && (obj.sectionId = message.sectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSectionResponse>
  ): MsgCreateSectionResponse {
    const message = {
      ...baseMsgCreateSectionResponse,
    } as MsgCreateSectionResponse;
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = object.sectionId;
    } else {
      message.sectionId = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateTopic(request: MsgCreateTopic): Promise<MsgCreateTopicResponse>;
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateSection(request: MsgCreateSection): Promise<MsgCreateSectionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateTopic(request: MsgCreateTopic): Promise<MsgCreateTopicResponse> {
    const data = MsgCreateTopic.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Msg", "CreateTopic", data);
    return promise.then((data) =>
      MsgCreateTopicResponse.decode(new Reader(data))
    );
  }

  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Msg", "CreatePost", data);
    return promise.then((data) =>
      MsgCreatePostResponse.decode(new Reader(data))
    );
  }

  CreateSection(request: MsgCreateSection): Promise<MsgCreateSectionResponse> {
    const data = MsgCreateSection.encode(request).finish();
    const promise = this.rpc.request("rj.rj.Msg", "CreateSection", data);
    return promise.then((data) =>
      MsgCreateSectionResponse.decode(new Reader(data))
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
