import * as jspb from 'google-protobuf'



export class CreateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CreateRequest;

  getPassword(): string;
  setPassword(value: string): CreateRequest;

  getUrl(): string;
  setUrl(value: string): CreateRequest;

  getAppname(): string;
  setAppname(value: string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    username: string,
    password: string,
    url: string,
    appname: string,
  }
}

export class IsDcfParsableRequest extends jspb.Message {
  getDcfpath(): string;
  setDcfpath(value: string): IsDcfParsableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsDcfParsableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsDcfParsableRequest): IsDcfParsableRequest.AsObject;
  static serializeBinaryToWriter(message: IsDcfParsableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsDcfParsableRequest;
  static deserializeBinaryFromReader(message: IsDcfParsableRequest, reader: jspb.BinaryReader): IsDcfParsableRequest;
}

export namespace IsDcfParsableRequest {
  export type AsObject = {
    dcfpath: string,
  }
}

export class Database extends jspb.Message {
  getDatabase(): string;
  setDatabase(value: string): Database;

  getCompanyname(): string;
  setCompanyname(value: string): Database;

  getRemark(): string;
  setRemark(value: string): Database;

  getVersion(): string;
  setVersion(value: string): Database;

  getDbusername(): string;
  setDbusername(value: string): Database;

  getDbpassword(): string;
  setDbpassword(value: string): Database;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Database.AsObject;
  static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
  static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Database;
  static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
  export type AsObject = {
    database: string,
    companyname: string,
    remark: string,
    version: string,
    dbusername: string,
    dbpassword: string,
  }
}

export class IsDcfParsableResponse extends jspb.Message {
  getDatabaseList(): Array<Database>;
  setDatabaseList(value: Array<Database>): IsDcfParsableResponse;
  clearDatabaseList(): IsDcfParsableResponse;
  addDatabase(value?: Database, index?: number): Database;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsDcfParsableResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsDcfParsableResponse): IsDcfParsableResponse.AsObject;
  static serializeBinaryToWriter(message: IsDcfParsableResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsDcfParsableResponse;
  static deserializeBinaryFromReader(message: IsDcfParsableResponse, reader: jspb.BinaryReader): IsDcfParsableResponse;
}

export namespace IsDcfParsableResponse {
  export type AsObject = {
    databaseList: Array<Database.AsObject>,
  }
}

export class TempPathRequest extends jspb.Message {
  getTemppath(): string;
  setTemppath(value: string): TempPathRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TempPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TempPathRequest): TempPathRequest.AsObject;
  static serializeBinaryToWriter(message: TempPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TempPathRequest;
  static deserializeBinaryFromReader(message: TempPathRequest, reader: jspb.BinaryReader): TempPathRequest;
}

export namespace TempPathRequest {
  export type AsObject = {
    temppath: string,
  }
}

export class PatchUrlRequest extends jspb.Message {
  getPatchurl(): string;
  setPatchurl(value: string): PatchUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchUrlRequest): PatchUrlRequest.AsObject;
  static serializeBinaryToWriter(message: PatchUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchUrlRequest;
  static deserializeBinaryFromReader(message: PatchUrlRequest, reader: jspb.BinaryReader): PatchUrlRequest;
}

export namespace PatchUrlRequest {
  export type AsObject = {
    patchurl: string,
  }
}

export class HookUrlRequest extends jspb.Message {
  getHookurl(): string;
  setHookurl(value: string): HookUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HookUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HookUrlRequest): HookUrlRequest.AsObject;
  static serializeBinaryToWriter(message: HookUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HookUrlRequest;
  static deserializeBinaryFromReader(message: HookUrlRequest, reader: jspb.BinaryReader): HookUrlRequest;
}

export namespace HookUrlRequest {
  export type AsObject = {
    hookurl: string,
  }
}

export class ReachableRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ReachableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReachableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReachableRequest): ReachableRequest.AsObject;
  static serializeBinaryToWriter(message: ReachableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReachableRequest;
  static deserializeBinaryFromReader(message: ReachableRequest, reader: jspb.BinaryReader): ReachableRequest;
}

export namespace ReachableRequest {
  export type AsObject = {
    url: string,
  }
}

export class LoginConfiguratorRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginConfiguratorRequest;

  getPassword(): string;
  setPassword(value: string): LoginConfiguratorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginConfiguratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginConfiguratorRequest): LoginConfiguratorRequest.AsObject;
  static serializeBinaryToWriter(message: LoginConfiguratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginConfiguratorRequest;
  static deserializeBinaryFromReader(message: LoginConfiguratorRequest, reader: jspb.BinaryReader): LoginConfiguratorRequest;
}

export namespace LoginConfiguratorRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class PluginResult extends jspb.Message {
  getName(): string;
  setName(value: string): PluginResult;

  getError(): string;
  setError(value: string): PluginResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginResult.AsObject;
  static toObject(includeInstance: boolean, msg: PluginResult): PluginResult.AsObject;
  static serializeBinaryToWriter(message: PluginResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginResult;
  static deserializeBinaryFromReader(message: PluginResult, reader: jspb.BinaryReader): PluginResult;
}

export namespace PluginResult {
  export type AsObject = {
    name: string,
    error: string,
  }
}

export class PluginResponse extends jspb.Message {
  getResList(): Array<PluginResult>;
  setResList(value: Array<PluginResult>): PluginResponse;
  clearResList(): PluginResponse;
  addRes(value?: PluginResult, index?: number): PluginResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PluginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PluginResponse): PluginResponse.AsObject;
  static serializeBinaryToWriter(message: PluginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PluginResponse;
  static deserializeBinaryFromReader(message: PluginResponse, reader: jspb.BinaryReader): PluginResponse;
}

export namespace PluginResponse {
  export type AsObject = {
    resList: Array<PluginResult.AsObject>,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

