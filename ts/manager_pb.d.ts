import * as jspb from 'google-protobuf'



export class TaskClientRequest extends jspb.Message {
  getDb(): number;
  setDb(value: number): TaskClientRequest;

  getAddr(): string;
  setAddr(value: string): TaskClientRequest;

  getUsername(): string;
  setUsername(value: string): TaskClientRequest;

  getPassword(): string;
  setPassword(value: string): TaskClientRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskClientRequest): TaskClientRequest.AsObject;
  static serializeBinaryToWriter(message: TaskClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskClientRequest;
  static deserializeBinaryFromReader(message: TaskClientRequest, reader: jspb.BinaryReader): TaskClientRequest;
}

export namespace TaskClientRequest {
  export type AsObject = {
    db: number,
    addr: string,
    username: string,
    password: string,
  }
}

export class ApiClientRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): ApiClientRequest;

  getPassword(): string;
  setPassword(value: string): ApiClientRequest;

  getUrl(): string;
  setUrl(value: string): ApiClientRequest;

  getAppname(): string;
  setAppname(value: string): ApiClientRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApiClientRequest): ApiClientRequest.AsObject;
  static serializeBinaryToWriter(message: ApiClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiClientRequest;
  static deserializeBinaryFromReader(message: ApiClientRequest, reader: jspb.BinaryReader): ApiClientRequest;
}

export namespace ApiClientRequest {
  export type AsObject = {
    username: string,
    password: string,
    url: string,
    appname: string,
  }
}

export class GcpCredentialsRequest extends jspb.Message {
  getJsondata(): string;
  setJsondata(value: string): GcpCredentialsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcpCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GcpCredentialsRequest): GcpCredentialsRequest.AsObject;
  static serializeBinaryToWriter(message: GcpCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcpCredentialsRequest;
  static deserializeBinaryFromReader(message: GcpCredentialsRequest, reader: jspb.BinaryReader): GcpCredentialsRequest;
}

export namespace GcpCredentialsRequest {
  export type AsObject = {
    jsondata: string,
  }
}

export class GcpProjectIdRequest extends jspb.Message {
  getProjectid(): string;
  setProjectid(value: string): GcpProjectIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcpProjectIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GcpProjectIdRequest): GcpProjectIdRequest.AsObject;
  static serializeBinaryToWriter(message: GcpProjectIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcpProjectIdRequest;
  static deserializeBinaryFromReader(message: GcpProjectIdRequest, reader: jspb.BinaryReader): GcpProjectIdRequest;
}

export namespace GcpProjectIdRequest {
  export type AsObject = {
    projectid: string,
  }
}

export class None extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): None.AsObject;
  static toObject(includeInstance: boolean, msg: None): None.AsObject;
  static serializeBinaryToWriter(message: None, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): None;
  static deserializeBinaryFromReader(message: None, reader: jspb.BinaryReader): None;
}

export namespace None {
  export type AsObject = {
  }
}

