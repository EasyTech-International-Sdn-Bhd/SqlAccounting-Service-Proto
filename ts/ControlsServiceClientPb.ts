/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.3
// source: controls.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as controls_pb from './controls_pb'; // proto import: "controls.proto"


export class ControlManagementClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorPing = new grpcWeb.MethodDescriptor(
    '/proto.ControlManagement/Ping',
    grpcWeb.MethodType.UNARY,
    controls_pb.Nothing,
    controls_pb.Result,
    (request: controls_pb.Nothing) => {
      return request.serializeBinary();
    },
    controls_pb.Result.deserializeBinary
  );

  ping(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata | null): Promise<controls_pb.Result>;

  ping(
    request: controls_pb.Nothing,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void): grpcWeb.ClientReadableStream<controls_pb.Result>;

  ping(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ControlManagement/Ping',
        request,
        metadata || {},
        this.methodDescriptorPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ControlManagement/Ping',
    request,
    metadata || {},
    this.methodDescriptorPing);
  }

  methodDescriptorStart = new grpcWeb.MethodDescriptor(
    '/proto.ControlManagement/Start',
    grpcWeb.MethodType.UNARY,
    controls_pb.Nothing,
    controls_pb.Result,
    (request: controls_pb.Nothing) => {
      return request.serializeBinary();
    },
    controls_pb.Result.deserializeBinary
  );

  start(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata | null): Promise<controls_pb.Result>;

  start(
    request: controls_pb.Nothing,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void): grpcWeb.ClientReadableStream<controls_pb.Result>;

  start(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ControlManagement/Start',
        request,
        metadata || {},
        this.methodDescriptorStart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ControlManagement/Start',
    request,
    metadata || {},
    this.methodDescriptorStart);
  }

  methodDescriptorStop = new grpcWeb.MethodDescriptor(
    '/proto.ControlManagement/Stop',
    grpcWeb.MethodType.UNARY,
    controls_pb.Nothing,
    controls_pb.Result,
    (request: controls_pb.Nothing) => {
      return request.serializeBinary();
    },
    controls_pb.Result.deserializeBinary
  );

  stop(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata | null): Promise<controls_pb.Result>;

  stop(
    request: controls_pb.Nothing,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void): grpcWeb.ClientReadableStream<controls_pb.Result>;

  stop(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ControlManagement/Stop',
        request,
        metadata || {},
        this.methodDescriptorStop,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ControlManagement/Stop',
    request,
    metadata || {},
    this.methodDescriptorStop);
  }

  methodDescriptorRestart = new grpcWeb.MethodDescriptor(
    '/proto.ControlManagement/Restart',
    grpcWeb.MethodType.UNARY,
    controls_pb.Nothing,
    controls_pb.Result,
    (request: controls_pb.Nothing) => {
      return request.serializeBinary();
    },
    controls_pb.Result.deserializeBinary
  );

  restart(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata | null): Promise<controls_pb.Result>;

  restart(
    request: controls_pb.Nothing,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void): grpcWeb.ClientReadableStream<controls_pb.Result>;

  restart(
    request: controls_pb.Nothing,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: controls_pb.Result) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.ControlManagement/Restart',
        request,
        metadata || {},
        this.methodDescriptorRestart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.ControlManagement/Restart',
    request,
    metadata || {},
    this.methodDescriptorRestart);
  }

}

