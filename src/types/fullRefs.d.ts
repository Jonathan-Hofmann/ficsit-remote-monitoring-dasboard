import type { FullRefsEnum } from "../enums/fullRefs.enum";

type FullRefsObject = {
  type: string;
  category: string;
};

export type FullRefs = Record<FullRefsEnum, FullRefsObject>;
