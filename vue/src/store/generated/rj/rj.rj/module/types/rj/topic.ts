/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "rj.rj";

export interface Topic {
  topicId: number;
  sectionId: number;
  title: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
}

const baseTopic: object = {
  topicId: 0,
  sectionId: 0,
  title: "",
  creator: "",
  createdAt: "",
  updatedAt: "",
};

export const Topic = {
  encode(message: Topic, writer: Writer = Writer.create()): Writer {
    if (message.topicId !== 0) {
      writer.uint32(8).uint64(message.topicId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint64(message.sectionId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.createdAt !== "") {
      writer.uint32(42).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(50).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Topic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTopic } as Topic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topicId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sectionId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.createdAt = reader.string();
          break;
        case 6:
          message.updatedAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Topic {
    const message = { ...baseTopic } as Topic;
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = Number(object.topicId);
    } else {
      message.topicId = 0;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = String(object.updatedAt);
    } else {
      message.updatedAt = "";
    }
    return message;
  },

  toJSON(message: Topic): unknown {
    const obj: any = {};
    message.topicId !== undefined && (obj.topicId = message.topicId);
    message.sectionId !== undefined && (obj.sectionId = message.sectionId);
    message.title !== undefined && (obj.title = message.title);
    message.creator !== undefined && (obj.creator = message.creator);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Topic>): Topic {
    const message = { ...baseTopic } as Topic;
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = object.topicId;
    } else {
      message.topicId = 0;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = "";
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
