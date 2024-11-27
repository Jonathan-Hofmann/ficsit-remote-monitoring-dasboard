import { FetchMethodsEnum } from "../enums/fetchMethods.enum";
import type { FetchResponse } from "../types/fetchResponse";

type Args = {
  apiUrl: string;
  endPoint: string;
  method: FetchMethodsEnum;
  body?: unknown;
};

export const fetcherHelper = async <T>({
  apiUrl,
  endPoint,
  method,
  body,
}: Args): Promise<FetchResponse<T>> => {
  try {
    const response = await fetch(`${apiUrl}${endPoint}`, {
      headers: {
        Accept: "application/json",
      },
      method,
      body: method !== FetchMethodsEnum.GET ? JSON.stringify(body) : undefined,
    });
    const responseData = {
      success: response.ok,
      status: `${response.status} - ${response.statusText}`,
    };
    if (response.status === 404)
      // TODO Insert here unadapted requests
      return {
        success: false,
        status: "Save don't able this request",
      };
    if (!response.ok) return responseData;
    const data = (await response.json()) as T;
    return {
      ...responseData,
      data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      status: "Request failed",
    };
  }
};
