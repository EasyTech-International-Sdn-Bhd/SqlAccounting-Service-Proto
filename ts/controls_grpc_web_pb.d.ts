import * as grpcWeb from 'grpc-web';

import * as controls_pb from './controls_pb'; // proto import: "controls.proto"


export class ControlManagementClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: controls_pb.Nothing,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void
  ): grpcWeb.ClientReadableStream<controls_pb.Result>;

  start(
    request: controls_pb.Nothing,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void
  ): grpcWeb.ClientReadableStream<controls_pb.Result>;

  stop(
    request: controls_pb.Nothing,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void
  ): grpcWeb.ClientReadableStream<controls_pb.Result>;

  restart(
    request: controls_pb.Nothing,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void
  ): grpcWeb.ClientReadableStream<controls_pb.Result>;

}

export class ControlManagementPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata
  ): Promise<controls_pb.Result>;

  start(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata
  ): Promise<controls_pb.Result>;

  stop(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata
  ): Promise<controls_pb.Result>;

  restart(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata
  ): Promise<controls_pb.Result>;

}

