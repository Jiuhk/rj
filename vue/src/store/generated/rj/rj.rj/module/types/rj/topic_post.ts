/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "rj.rj";

export interface TopicPost {
  topicId: number;
  posts: number[];
}

const baseTopicPost: object = { topicId: 0, posts: 0 };

export const TopicPost = {
  encode(message: TopicPost, writer: Writer = Writer.create()): Writer {
    if (message.topicId !== 0) {
      writer.uint32(8).uint64(message.topicId);
    }
    writer.uint32(18).fork();
    for (const v of message.posts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TopicPost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTopicPost } as TopicPost;
    message.posts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topicId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.posts.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.posts.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TopicPost {
    const message = { ...baseTopicPost } as TopicPost;
    message.posts = [];
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = Number(object.topicId);
    } else {
      message.topicId = 0;
    }
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: TopicPost): unknown {
    const obj: any = {};
    message.topicId !== undefined && (obj.topicId = message.topicId);
    if (message.posts) {
      obj.posts = message.posts.map((e) => e);
    } else {
      obj.posts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TopicPost>): TopicPost {
    const message = { ...baseTopicPost } as TopicPost;
    message.posts = [];
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = object.topicId;
    } else {
      message.topicId = 0;
    }
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(e);
      }
    }
    return message;
  },
};

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
