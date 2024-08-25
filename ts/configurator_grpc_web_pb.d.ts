import * as grpcWeb from 'grpc-web';

import * as configurator_pb from './configurator_pb'; // proto import: "configurator.proto"


export class SetupConfiguratorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: configurator_pb.CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.Empty>;

  isDcfParsable(
    request: configurator_pb.IsDcfParsableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.IsDcfParsableResponse) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.IsDcfParsableResponse>;

  setDatabase(
    request: configurator_pb.Database,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.Empty>;

  setTempPath(
    request: configurator_pb.TempPathRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.Empty>;

  setPatchUrl(
    request: configurator_pb.PatchUrlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.Empty>;

  setHookUrl(
    request: configurator_pb.HookUrlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.Empty>;

  isReachable(
    request: configurator_pb.ReachableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.Empty>;

  loginConfigurator(
    request: configurator_pb.LoginConfiguratorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.Empty>;

  installPlugins(
    request: configurator_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.PluginResponse) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.PluginResponse>;

  uninstallPlugins(
    request: configurator_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: configurator_pb.PluginResponse) => void
  ): grpcWeb.ClientReadableStream<configurator_pb.PluginResponse>;

}

export class SetupConfiguratorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  create(
    request: configurator_pb.CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.Empty>;

  isDcfParsable(
    request: configurator_pb.IsDcfParsableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.IsDcfParsableResponse>;

  setDatabase(
    request: configurator_pb.Database,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.Empty>;

  setTempPath(
    request: configurator_pb.TempPathRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.Empty>;

  setPatchUrl(
    request: configurator_pb.PatchUrlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.Empty>;

  setHookUrl(
    request: configurator_pb.HookUrlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.Empty>;

  isReachable(
    request: configurator_pb.ReachableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.Empty>;

  loginConfigurator(
    request: configurator_pb.LoginConfiguratorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.Empty>;

  installPlugins(
    request: configurator_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.PluginResponse>;

  uninstallPlugins(
    request: configurator_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<configurator_pb.PluginResponse>;

}

