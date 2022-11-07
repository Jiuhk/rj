/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "rj.rj";

export interface SectionTopic {
  sectionId: number;
  topics: number[];
}

const baseSectionTopic: object = { sectionId: 0, topics: 0 };

export const SectionTopic = {
  encode(message: SectionTopic, writer: Writer = Writer.create()): Writer {
    if (message.sectionId !== 0) {
      writer.uint32(8).uint64(message.sectionId);
    }
    writer.uint32(18).fork();
    for (const v of message.topics) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SectionTopic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSectionTopic } as SectionTopic;
    message.topics = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.topics.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.topics.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SectionTopic {
    const message = { ...baseSectionTopic } as SectionTopic;
    message.topics = [];
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = Number(object.sectionId);
    } else {
      message.sectionId = 0;
    }
    if (object.topics !== undefined && object.topics !== null) {
      for (const e of object.topics) {
        message.topics.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: SectionTopic): unknown {
    const obj: any = {};
    message.sectionId !== undefined && (obj.sectionId = message.sectionId);
    if (message.topics) {
      obj.topics = message.topics.map((e) => e);
    } else {
      obj.topics = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SectionTopic>): SectionTopic {
    const message = { ...baseSectionTopic } as SectionTopic;
    message.topics = [];
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = object.sectionId;
    } else {
      message.sectionId = 0;
    }
    if (object.topics !== undefined && object.topics !== null) {
      for (const e of object.topics) {
        message.topics.push(e);
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
