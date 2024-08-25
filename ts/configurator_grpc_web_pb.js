/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.3
// source: configurator.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./configurator_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.SetupConfiguratorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.SetupConfiguratorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.CreateRequest,
 *   !proto.proto.Empty>}
 */
const methodDescriptor_SetupConfigurator_Create = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/Create',
  grpc.web.MethodType.UNARY,
  proto.proto.CreateRequest,
  proto.proto.Empty,
  /**
   * @param {!proto.proto.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Empty.deserializeBinary
);


/**
 * @param {!proto.proto.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/Create',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_Create,
      callback);
};


/**
 * @param {!proto.proto.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Empty>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/Create',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.IsDcfParsableRequest,
 *   !proto.proto.IsDcfParsableResponse>}
 */
const methodDescriptor_SetupConfigurator_IsDcfParsable = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/IsDcfParsable',
  grpc.web.MethodType.UNARY,
  proto.proto.IsDcfParsableRequest,
  proto.proto.IsDcfParsableResponse,
  /**
   * @param {!proto.proto.IsDcfParsableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.IsDcfParsableResponse.deserializeBinary
);


/**
 * @param {!proto.proto.IsDcfParsableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.IsDcfParsableResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.IsDcfParsableResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.isDcfParsable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/IsDcfParsable',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_IsDcfParsable,
      callback);
};


/**
 * @param {!proto.proto.IsDcfParsableRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.IsDcfParsableResponse>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.isDcfParsable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/IsDcfParsable',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_IsDcfParsable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.Database,
 *   !proto.proto.Empty>}
 */
const methodDescriptor_SetupConfigurator_SetDatabase = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/SetDatabase',
  grpc.web.MethodType.UNARY,
  proto.proto.Database,
  proto.proto.Empty,
  /**
   * @param {!proto.proto.Database} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Empty.deserializeBinary
);


/**
 * @param {!proto.proto.Database} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.setDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/SetDatabase',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_SetDatabase,
      callback);
};


/**
 * @param {!proto.proto.Database} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Empty>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.setDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/SetDatabase',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_SetDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.TempPathRequest,
 *   !proto.proto.Empty>}
 */
const methodDescriptor_SetupConfigurator_SetTempPath = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/SetTempPath',
  grpc.web.MethodType.UNARY,
  proto.proto.TempPathRequest,
  proto.proto.Empty,
  /**
   * @param {!proto.proto.TempPathRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Empty.deserializeBinary
);


/**
 * @param {!proto.proto.TempPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.setTempPath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/SetTempPath',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_SetTempPath,
      callback);
};


/**
 * @param {!proto.proto.TempPathRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Empty>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.setTempPath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/SetTempPath',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_SetTempPath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.PatchUrlRequest,
 *   !proto.proto.Empty>}
 */
const methodDescriptor_SetupConfigurator_SetPatchUrl = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/SetPatchUrl',
  grpc.web.MethodType.UNARY,
  proto.proto.PatchUrlRequest,
  proto.proto.Empty,
  /**
   * @param {!proto.proto.PatchUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Empty.deserializeBinary
);


/**
 * @param {!proto.proto.PatchUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.setPatchUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/SetPatchUrl',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_SetPatchUrl,
      callback);
};


/**
 * @param {!proto.proto.PatchUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Empty>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.setPatchUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/SetPatchUrl',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_SetPatchUrl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.HookUrlRequest,
 *   !proto.proto.Empty>}
 */
const methodDescriptor_SetupConfigurator_SetHookUrl = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/SetHookUrl',
  grpc.web.MethodType.UNARY,
  proto.proto.HookUrlRequest,
  proto.proto.Empty,
  /**
   * @param {!proto.proto.HookUrlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Empty.deserializeBinary
);


/**
 * @param {!proto.proto.HookUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.setHookUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/SetHookUrl',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_SetHookUrl,
      callback);
};


/**
 * @param {!proto.proto.HookUrlRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Empty>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.setHookUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/SetHookUrl',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_SetHookUrl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ReachableRequest,
 *   !proto.proto.Empty>}
 */
const methodDescriptor_SetupConfigurator_IsReachable = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/IsReachable',
  grpc.web.MethodType.UNARY,
  proto.proto.ReachableRequest,
  proto.proto.Empty,
  /**
   * @param {!proto.proto.ReachableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Empty.deserializeBinary
);


/**
 * @param {!proto.proto.ReachableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.isReachable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/IsReachable',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_IsReachable,
      callback);
};


/**
 * @param {!proto.proto.ReachableRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Empty>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.isReachable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/IsReachable',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_IsReachable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.LoginConfiguratorRequest,
 *   !proto.proto.Empty>}
 */
const methodDescriptor_SetupConfigurator_LoginConfigurator = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/LoginConfigurator',
  grpc.web.MethodType.UNARY,
  proto.proto.LoginConfiguratorRequest,
  proto.proto.Empty,
  /**
   * @param {!proto.proto.LoginConfiguratorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Empty.deserializeBinary
);


/**
 * @param {!proto.proto.LoginConfiguratorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.loginConfigurator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/LoginConfigurator',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_LoginConfigurator,
      callback);
};


/**
 * @param {!proto.proto.LoginConfiguratorRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.Empty>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.loginConfigurator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/LoginConfigurator',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_LoginConfigurator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.Empty,
 *   !proto.proto.PluginResponse>}
 */
const methodDescriptor_SetupConfigurator_InstallPlugins = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/InstallPlugins',
  grpc.web.MethodType.UNARY,
  proto.proto.Empty,
  proto.proto.PluginResponse,
  /**
   * @param {!proto.proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.PluginResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.PluginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.PluginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.installPlugins =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/InstallPlugins',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_InstallPlugins,
      callback);
};


/**
 * @param {!proto.proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.PluginResponse>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.installPlugins =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/InstallPlugins',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_InstallPlugins);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.Empty,
 *   !proto.proto.PluginResponse>}
 */
const methodDescriptor_SetupConfigurator_UninstallPlugins = new grpc.web.MethodDescriptor(
  '/proto.SetupConfigurator/UninstallPlugins',
  grpc.web.MethodType.UNARY,
  proto.proto.Empty,
  proto.proto.PluginResponse,
  /**
   * @param {!proto.proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.PluginResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.PluginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.PluginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.SetupConfiguratorClient.prototype.uninstallPlugins =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.SetupConfigurator/UninstallPlugins',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_UninstallPlugins,
      callback);
};


/**
 * @param {!proto.proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.PluginResponse>}
 *     Promise that resolves to the response
 */
proto.proto.SetupConfiguratorPromiseClient.prototype.uninstallPlugins =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.SetupConfigurator/UninstallPlugins',
      request,
      metadata || {},
      methodDescriptor_SetupConfigurator_UninstallPlugins);
};


module.exports = proto.proto;

