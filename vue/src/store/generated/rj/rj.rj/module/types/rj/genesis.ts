/* eslint-disable */
import { Params } from "../rj/params";
import { SectionId } from "../rj/section_id";
import { TopicId } from "../rj/topic_id";
import { PostId } from "../rj/post_id";
import { Section } from "../rj/section";
import { Topic } from "../rj/topic";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "rj.rj";

/** GenesisState defines the rj module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  sectionId: SectionId | undefined;
  topicId: TopicId | undefined;
  postId: PostId | undefined;
  sectionList: Section[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  topicList: Topic[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.sectionId !== undefined) {
      SectionId.encode(message.sectionId, writer.uint32(18).fork()).ldelim();
    }
    if (message.topicId !== undefined) {
      TopicId.encode(message.topicId, writer.uint32(26).fork()).ldelim();
    }
    if (message.postId !== undefined) {
      PostId.encode(message.postId, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sectionList) {
      Section.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.topicList) {
      Topic.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.sectionList = [];
    message.topicList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.sectionId = SectionId.decode(reader, reader.uint32());
          break;
        case 3:
          message.topicId = TopicId.decode(reader, reader.uint32());
          break;
        case 4:
          message.postId = PostId.decode(reader, reader.uint32());
          break;
        case 5:
          message.sectionList.push(Section.decode(reader, reader.uint32()));
          break;
        case 6:
          message.topicList.push(Topic.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sectionList = [];
    message.topicList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = SectionId.fromJSON(object.sectionId);
    } else {
      message.sectionId = undefined;
    }
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = TopicId.fromJSON(object.topicId);
    } else {
      message.topicId = undefined;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = PostId.fromJSON(object.postId);
    } else {
      message.postId = undefined;
    }
    if (object.sectionList !== undefined && object.sectionList !== null) {
      for (const e of object.sectionList) {
        message.sectionList.push(Section.fromJSON(e));
      }
    }
    if (object.topicList !== undefined && object.topicList !== null) {
      for (const e of object.topicList) {
        message.topicList.push(Topic.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.sectionId !== undefined &&
      (obj.sectionId = message.sectionId
        ? SectionId.toJSON(message.sectionId)
        : undefined);
    message.topicId !== undefined &&
      (obj.topicId = message.topicId
        ? TopicId.toJSON(message.topicId)
        : undefined);
    message.postId !== undefined &&
      (obj.postId = message.postId ? PostId.toJSON(message.postId) : undefined);
    if (message.sectionList) {
      obj.sectionList = message.sectionList.map((e) =>
        e ? Section.toJSON(e) : undefined
      );
    } else {
      obj.sectionList = [];
    }
    if (message.topicList) {
      obj.topicList = message.topicList.map((e) =>
        e ? Topic.toJSON(e) : undefined
      );
    } else {
      obj.topicList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sectionList = [];
    message.topicList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.sectionId !== undefined && object.sectionId !== null) {
      message.sectionId = SectionId.fromPartial(object.sectionId);
    } else {
      message.sectionId = undefined;
    }
    if (object.topicId !== undefined && object.topicId !== null) {
      message.topicId = TopicId.fromPartial(object.topicId);
    } else {
      message.topicId = undefined;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = PostId.fromPartial(object.postId);
    } else {
      message.postId = undefined;
    }
    if (object.sectionList !== undefined && object.sectionList !== null) {
      for (const e of object.sectionList) {
        message.sectionList.push(Section.fromPartial(e));
      }
    }
    if (object.topicList !== undefined && object.topicList !== null) {
      for (const e of object.topicList) {
        message.topicList.push(Topic.fromPartial(e));
      }
    }
    return message;
  },
};

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
