type CouponType = {
  Name: string;
  ClassName: string;
};

export type AwesomeSinkDto = {
  Name: string;
  ClassName: string;
  CouponType: CouponType;
  NumCoupon: number;
  Percent: number;
  GraphPoints?: number[] | null;
  TotalPoints: number;
  PointsToCoupon: number;
};
