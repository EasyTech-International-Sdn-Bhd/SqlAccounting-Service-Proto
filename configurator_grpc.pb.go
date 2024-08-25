// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.27.3
// source: proto/configurator.proto

package proto

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	SetupConfigurator_Create_FullMethodName            = "/proto.SetupConfigurator/Create"
	SetupConfigurator_IsDcfParsable_FullMethodName     = "/proto.SetupConfigurator/IsDcfParsable"
	SetupConfigurator_SetDatabase_FullMethodName       = "/proto.SetupConfigurator/SetDatabase"
	SetupConfigurator_SetTempPath_FullMethodName       = "/proto.SetupConfigurator/SetTempPath"
	SetupConfigurator_SetPatchUrl_FullMethodName       = "/proto.SetupConfigurator/SetPatchUrl"
	SetupConfigurator_SetHookUrl_FullMethodName        = "/proto.SetupConfigurator/SetHookUrl"
	SetupConfigurator_IsReachable_FullMethodName       = "/proto.SetupConfigurator/IsReachable"
	SetupConfigurator_LoginConfigurator_FullMethodName = "/proto.SetupConfigurator/LoginConfigurator"
	SetupConfigurator_InstallPlugins_FullMethodName    = "/proto.SetupConfigurator/InstallPlugins"
	SetupConfigurator_UninstallPlugins_FullMethodName  = "/proto.SetupConfigurator/UninstallPlugins"
)

// SetupConfiguratorClient is the client API for SetupConfigurator service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SetupConfiguratorClient interface {
	Create(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*Empty, error)
	IsDcfParsable(ctx context.Context, in *IsDcfParsableRequest, opts ...grpc.CallOption) (*IsDcfParsableResponse, error)
	SetDatabase(ctx context.Context, in *Database, opts ...grpc.CallOption) (*Empty, error)
	SetTempPath(ctx context.Context, in *TempPathRequest, opts ...grpc.CallOption) (*Empty, error)
	SetPatchUrl(ctx context.Context, in *PatchUrlRequest, opts ...grpc.CallOption) (*Empty, error)
	SetHookUrl(ctx context.Context, in *HookUrlRequest, opts ...grpc.CallOption) (*Empty, error)
	IsReachable(ctx context.Context, in *ReachableRequest, opts ...grpc.CallOption) (*Empty, error)
	LoginConfigurator(ctx context.Context, in *LoginConfiguratorRequest, opts ...grpc.CallOption) (*Empty, error)
	InstallPlugins(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*PluginResponse, error)
	UninstallPlugins(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*PluginResponse, error)
}

type setupConfiguratorClient struct {
	cc grpc.ClientConnInterface
}

func NewSetupConfiguratorClient(cc grpc.ClientConnInterface) SetupConfiguratorClient {
	return &setupConfiguratorClient{cc}
}

func (c *setupConfiguratorClient) Create(ctx context.Context, in *CreateRequest, opts ...grpc.CallOption) (*Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Empty)
	err := c.cc.Invoke(ctx, SetupConfigurator_Create_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) IsDcfParsable(ctx context.Context, in *IsDcfParsableRequest, opts ...grpc.CallOption) (*IsDcfParsableResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(IsDcfParsableResponse)
	err := c.cc.Invoke(ctx, SetupConfigurator_IsDcfParsable_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) SetDatabase(ctx context.Context, in *Database, opts ...grpc.CallOption) (*Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Empty)
	err := c.cc.Invoke(ctx, SetupConfigurator_SetDatabase_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) SetTempPath(ctx context.Context, in *TempPathRequest, opts ...grpc.CallOption) (*Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Empty)
	err := c.cc.Invoke(ctx, SetupConfigurator_SetTempPath_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) SetPatchUrl(ctx context.Context, in *PatchUrlRequest, opts ...grpc.CallOption) (*Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Empty)
	err := c.cc.Invoke(ctx, SetupConfigurator_SetPatchUrl_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) SetHookUrl(ctx context.Context, in *HookUrlRequest, opts ...grpc.CallOption) (*Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Empty)
	err := c.cc.Invoke(ctx, SetupConfigurator_SetHookUrl_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) IsReachable(ctx context.Context, in *ReachableRequest, opts ...grpc.CallOption) (*Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Empty)
	err := c.cc.Invoke(ctx, SetupConfigurator_IsReachable_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) LoginConfigurator(ctx context.Context, in *LoginConfiguratorRequest, opts ...grpc.CallOption) (*Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Empty)
	err := c.cc.Invoke(ctx, SetupConfigurator_LoginConfigurator_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) InstallPlugins(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*PluginResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(PluginResponse)
	err := c.cc.Invoke(ctx, SetupConfigurator_InstallPlugins_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *setupConfiguratorClient) UninstallPlugins(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*PluginResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(PluginResponse)
	err := c.cc.Invoke(ctx, SetupConfigurator_UninstallPlugins_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SetupConfiguratorServer is the server API for SetupConfigurator service.
// All implementations must embed UnimplementedSetupConfiguratorServer
// for forward compatibility.
type SetupConfiguratorServer interface {
	Create(context.Context, *CreateRequest) (*Empty, error)
	IsDcfParsable(context.Context, *IsDcfParsableRequest) (*IsDcfParsableResponse, error)
	SetDatabase(context.Context, *Database) (*Empty, error)
	SetTempPath(context.Context, *TempPathRequest) (*Empty, error)
	SetPatchUrl(context.Context, *PatchUrlRequest) (*Empty, error)
	SetHookUrl(context.Context, *HookUrlRequest) (*Empty, error)
	IsReachable(context.Context, *ReachableRequest) (*Empty, error)
	LoginConfigurator(context.Context, *LoginConfiguratorRequest) (*Empty, error)
	InstallPlugins(context.Context, *Empty) (*PluginResponse, error)
	UninstallPlugins(context.Context, *Empty) (*PluginResponse, error)
	mustEmbedUnimplementedSetupConfiguratorServer()
}

// UnimplementedSetupConfiguratorServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedSetupConfiguratorServer struct{}

func (UnimplementedSetupConfiguratorServer) Create(context.Context, *CreateRequest) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedSetupConfiguratorServer) IsDcfParsable(context.Context, *IsDcfParsableRequest) (*IsDcfParsableResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsDcfParsable not implemented")
}
func (UnimplementedSetupConfiguratorServer) SetDatabase(context.Context, *Database) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetDatabase not implemented")
}
func (UnimplementedSetupConfiguratorServer) SetTempPath(context.Context, *TempPathRequest) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetTempPath not implemented")
}
func (UnimplementedSetupConfiguratorServer) SetPatchUrl(context.Context, *PatchUrlRequest) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetPatchUrl not implemented")
}
func (UnimplementedSetupConfiguratorServer) SetHookUrl(context.Context, *HookUrlRequest) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetHookUrl not implemented")
}
func (UnimplementedSetupConfiguratorServer) IsReachable(context.Context, *ReachableRequest) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsReachable not implemented")
}
func (UnimplementedSetupConfiguratorServer) LoginConfigurator(context.Context, *LoginConfiguratorRequest) (*Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LoginConfigurator not implemented")
}
func (UnimplementedSetupConfiguratorServer) InstallPlugins(context.Context, *Empty) (*PluginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InstallPlugins not implemented")
}
func (UnimplementedSetupConfiguratorServer) UninstallPlugins(context.Context, *Empty) (*PluginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UninstallPlugins not implemented")
}
func (UnimplementedSetupConfiguratorServer) mustEmbedUnimplementedSetupConfiguratorServer() {}
func (UnimplementedSetupConfiguratorServer) testEmbeddedByValue()                           {}

// UnsafeSetupConfiguratorServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SetupConfiguratorServer will
// result in compilation errors.
type UnsafeSetupConfiguratorServer interface {
	mustEmbedUnimplementedSetupConfiguratorServer()
}

func RegisterSetupConfiguratorServer(s grpc.ServiceRegistrar, srv SetupConfiguratorServer) {
	// If the following call pancis, it indicates UnimplementedSetupConfiguratorServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&SetupConfigurator_ServiceDesc, srv)
}

func _SetupConfigurator_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_Create_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).Create(ctx, req.(*CreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_IsDcfParsable_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IsDcfParsableRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).IsDcfParsable(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_IsDcfParsable_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).IsDcfParsable(ctx, req.(*IsDcfParsableRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_SetDatabase_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Database)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).SetDatabase(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_SetDatabase_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).SetDatabase(ctx, req.(*Database))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_SetTempPath_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TempPathRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).SetTempPath(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_SetTempPath_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).SetTempPath(ctx, req.(*TempPathRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_SetPatchUrl_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PatchUrlRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).SetPatchUrl(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_SetPatchUrl_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).SetPatchUrl(ctx, req.(*PatchUrlRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_SetHookUrl_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HookUrlRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).SetHookUrl(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_SetHookUrl_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).SetHookUrl(ctx, req.(*HookUrlRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_IsReachable_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReachableRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).IsReachable(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_IsReachable_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).IsReachable(ctx, req.(*ReachableRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_LoginConfigurator_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginConfiguratorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).LoginConfigurator(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_LoginConfigurator_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).LoginConfigurator(ctx, req.(*LoginConfiguratorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_InstallPlugins_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).InstallPlugins(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_InstallPlugins_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).InstallPlugins(ctx, req.(*Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _SetupConfigurator_UninstallPlugins_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SetupConfiguratorServer).UninstallPlugins(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SetupConfigurator_UninstallPlugins_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SetupConfiguratorServer).UninstallPlugins(ctx, req.(*Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// SetupConfigurator_ServiceDesc is the grpc.ServiceDesc for SetupConfigurator service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SetupConfigurator_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "proto.SetupConfigurator",
	HandlerType: (*SetupConfiguratorServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _SetupConfigurator_Create_Handler,
		},
		{
			MethodName: "IsDcfParsable",
			Handler:    _SetupConfigurator_IsDcfParsable_Handler,
		},
		{
			MethodName: "SetDatabase",
			Handler:    _SetupConfigurator_SetDatabase_Handler,
		},
		{
			MethodName: "SetTempPath",
			Handler:    _SetupConfigurator_SetTempPath_Handler,
		},
		{
			MethodName: "SetPatchUrl",
			Handler:    _SetupConfigurator_SetPatchUrl_Handler,
		},
		{
			MethodName: "SetHookUrl",
			Handler:    _SetupConfigurator_SetHookUrl_Handler,
		},
		{
			MethodName: "IsReachable",
			Handler:    _SetupConfigurator_IsReachable_Handler,
		},
		{
			MethodName: "LoginConfigurator",
			Handler:    _SetupConfigurator_LoginConfigurator_Handler,
		},
		{
			MethodName: "InstallPlugins",
			Handler:    _SetupConfigurator_InstallPlugins_Handler,
		},
		{
			MethodName: "UninstallPlugins",
			Handler:    _SetupConfigurator_UninstallPlugins_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/configurator.proto",
}
