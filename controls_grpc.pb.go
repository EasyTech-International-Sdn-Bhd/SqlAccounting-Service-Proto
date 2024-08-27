// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.27.3
// source: proto/controls.proto

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
	ControlManagement_JobTracking_FullMethodName        = "/proto.ControlManagement/JobTracking"
	ControlManagement_ErrorTracking_FullMethodName      = "/proto.ControlManagement/ErrorTracking"
	ControlManagement_RetrieveEverything_FullMethodName = "/proto.ControlManagement/RetrieveEverything"
	ControlManagement_Monitor_FullMethodName            = "/proto.ControlManagement/Monitor"
)

// ControlManagementClient is the client API for ControlManagement service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ControlManagementClient interface {
	JobTracking(ctx context.Context, in *Nothing, opts ...grpc.CallOption) (grpc.ServerStreamingClient[JobTrackingResponse], error)
	ErrorTracking(ctx context.Context, in *Nothing, opts ...grpc.CallOption) (grpc.ServerStreamingClient[ErrorMessage], error)
	RetrieveEverything(ctx context.Context, in *Nothing, opts ...grpc.CallOption) (*Result, error)
	Monitor(ctx context.Context, in *Nothing, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PingResponse], error)
}

type controlManagementClient struct {
	cc grpc.ClientConnInterface
}

func NewControlManagementClient(cc grpc.ClientConnInterface) ControlManagementClient {
	return &controlManagementClient{cc}
}

func (c *controlManagementClient) JobTracking(ctx context.Context, in *Nothing, opts ...grpc.CallOption) (grpc.ServerStreamingClient[JobTrackingResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &ControlManagement_ServiceDesc.Streams[0], ControlManagement_JobTracking_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[Nothing, JobTrackingResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type ControlManagement_JobTrackingClient = grpc.ServerStreamingClient[JobTrackingResponse]

func (c *controlManagementClient) ErrorTracking(ctx context.Context, in *Nothing, opts ...grpc.CallOption) (grpc.ServerStreamingClient[ErrorMessage], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &ControlManagement_ServiceDesc.Streams[1], ControlManagement_ErrorTracking_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[Nothing, ErrorMessage]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type ControlManagement_ErrorTrackingClient = grpc.ServerStreamingClient[ErrorMessage]

func (c *controlManagementClient) RetrieveEverything(ctx context.Context, in *Nothing, opts ...grpc.CallOption) (*Result, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(Result)
	err := c.cc.Invoke(ctx, ControlManagement_RetrieveEverything_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *controlManagementClient) Monitor(ctx context.Context, in *Nothing, opts ...grpc.CallOption) (grpc.ServerStreamingClient[PingResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &ControlManagement_ServiceDesc.Streams[2], ControlManagement_Monitor_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[Nothing, PingResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type ControlManagement_MonitorClient = grpc.ServerStreamingClient[PingResponse]

// ControlManagementServer is the server API for ControlManagement service.
// All implementations must embed UnimplementedControlManagementServer
// for forward compatibility.
type ControlManagementServer interface {
	JobTracking(*Nothing, grpc.ServerStreamingServer[JobTrackingResponse]) error
	ErrorTracking(*Nothing, grpc.ServerStreamingServer[ErrorMessage]) error
	RetrieveEverything(context.Context, *Nothing) (*Result, error)
	Monitor(*Nothing, grpc.ServerStreamingServer[PingResponse]) error
	mustEmbedUnimplementedControlManagementServer()
}

// UnimplementedControlManagementServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedControlManagementServer struct{}

func (UnimplementedControlManagementServer) JobTracking(*Nothing, grpc.ServerStreamingServer[JobTrackingResponse]) error {
	return status.Errorf(codes.Unimplemented, "method JobTracking not implemented")
}
func (UnimplementedControlManagementServer) ErrorTracking(*Nothing, grpc.ServerStreamingServer[ErrorMessage]) error {
	return status.Errorf(codes.Unimplemented, "method ErrorTracking not implemented")
}
func (UnimplementedControlManagementServer) RetrieveEverything(context.Context, *Nothing) (*Result, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RetrieveEverything not implemented")
}
func (UnimplementedControlManagementServer) Monitor(*Nothing, grpc.ServerStreamingServer[PingResponse]) error {
	return status.Errorf(codes.Unimplemented, "method Monitor not implemented")
}
func (UnimplementedControlManagementServer) mustEmbedUnimplementedControlManagementServer() {}
func (UnimplementedControlManagementServer) testEmbeddedByValue()                           {}

// UnsafeControlManagementServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ControlManagementServer will
// result in compilation errors.
type UnsafeControlManagementServer interface {
	mustEmbedUnimplementedControlManagementServer()
}

func RegisterControlManagementServer(s grpc.ServiceRegistrar, srv ControlManagementServer) {
	// If the following call pancis, it indicates UnimplementedControlManagementServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&ControlManagement_ServiceDesc, srv)
}

func _ControlManagement_JobTracking_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(Nothing)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ControlManagementServer).JobTracking(m, &grpc.GenericServerStream[Nothing, JobTrackingResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type ControlManagement_JobTrackingServer = grpc.ServerStreamingServer[JobTrackingResponse]

func _ControlManagement_ErrorTracking_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(Nothing)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ControlManagementServer).ErrorTracking(m, &grpc.GenericServerStream[Nothing, ErrorMessage]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type ControlManagement_ErrorTrackingServer = grpc.ServerStreamingServer[ErrorMessage]

func _ControlManagement_RetrieveEverything_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Nothing)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ControlManagementServer).RetrieveEverything(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ControlManagement_RetrieveEverything_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ControlManagementServer).RetrieveEverything(ctx, req.(*Nothing))
	}
	return interceptor(ctx, in, info, handler)
}

func _ControlManagement_Monitor_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(Nothing)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ControlManagementServer).Monitor(m, &grpc.GenericServerStream[Nothing, PingResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type ControlManagement_MonitorServer = grpc.ServerStreamingServer[PingResponse]

// ControlManagement_ServiceDesc is the grpc.ServiceDesc for ControlManagement service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ControlManagement_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "proto.ControlManagement",
	HandlerType: (*ControlManagementServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "RetrieveEverything",
			Handler:    _ControlManagement_RetrieveEverything_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "JobTracking",
			Handler:       _ControlManagement_JobTracking_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "ErrorTracking",
			Handler:       _ControlManagement_ErrorTracking_Handler,
			ServerStreams: true,
		},
		{
			StreamName:    "Monitor",
			Handler:       _ControlManagement_Monitor_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "proto/controls.proto",
}
