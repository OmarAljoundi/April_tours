import { ITourType } from "models/interface/Tour";

export type TourTypeState = {
  TourTypes: ITourType[] | null;
};

export type TourTypeAction = {
  type: string;
  TourTypes: ITourType[];
};
