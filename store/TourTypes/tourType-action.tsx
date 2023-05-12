import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import TourTypeSlice from "./tourType-slice";
import { ITourType } from "@/models/interface/Tour";

export const tourTypesAction = TourTypeSlice.actions;

export const setTourTypes = (
  Item: ITourType[]
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch, getState) => {
    dispatch(tourTypesAction.SetTourTypes(Item));
  };
};
