import type { EndpointEnum } from "../enums/endpoint.enum";

export type MapperFunction<Input, Output> = (data: Input) => Output;

export type EndPoint = Record<EndpointEnum, MapperFunction>;
