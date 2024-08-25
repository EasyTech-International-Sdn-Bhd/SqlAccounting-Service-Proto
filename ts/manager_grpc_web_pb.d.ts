import * as grpcWeb from 'grpc-web';

import * as manager_pb from './manager_pb'; // proto import: "manager.proto"


export class ManagerConfiguratorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  setTaskClientConfig(
    request: manager_pb.TaskClientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: manager_pb.None) => void
  ): grpcWeb.ClientReadableStream<manager_pb.None>;

  setApiClientConfig(
    request: manager_pb.ApiClientRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: manager_pb.None) => void
  ): grpcWeb.ClientReadableStream<manager_pb.None>;

  setGpcCredentials(
    request: manager_pb.GcpCredentialsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: manager_pb.None) => void
  ): grpcWeb.ClientReadableStream<manager_pb.None>;

  setGcpProjectId(
    request: manager_pb.GcpProjectIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: manager_pb.None) => void
  ): grpcWeb.ClientReadableStream<manager_pb.None>;

  getServiceId(
    request: manager_pb.None,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: manager_pb.IdResponse) => void
  ): grpcWeb.ClientReadableStream<manager_pb.IdResponse>;

}

export class ManagerConfiguratorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  setTaskClientConfig(
    request: manager_pb.TaskClientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<manager_pb.None>;

  setApiClientConfig(
    request: manager_pb.ApiClientRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<manager_pb.None>;

  setGpcCredentials(
    request: manager_pb.GcpCredentialsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<manager_pb.None>;

  setGcpProjectId(
    request: manager_pb.GcpProjectIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<manager_pb.None>;

  getServiceId(
    request: manager_pb.None,
    metadata?: grpcWeb.Metadata
  ): Promise<manager_pb.IdResponse>;

}

