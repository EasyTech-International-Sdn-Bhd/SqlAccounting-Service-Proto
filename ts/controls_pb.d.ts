import * as jspb from 'google-protobuf'



export class Nothing extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nothing.AsObject;
  static toObject(includeInstance: boolean, msg: Nothing): Nothing.AsObject;
  static serializeBinaryToWriter(message: Nothing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nothing;
  static deserializeBinaryFromReader(message: Nothing, reader: jspb.BinaryReader): Nothing;
}

export namespace Nothing {
  export type AsObject = {
  }
}

export class Result extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    ok: boolean,
  }
}

