export type FetchResponse<T> = {
  success: boolean;
  status: string;
  data?: T;
};
