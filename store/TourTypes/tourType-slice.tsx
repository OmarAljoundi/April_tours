import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TourTypeState } from "../storeTypes";
import { ITourType } from "@/models/interface/Tour";

const initialTypesState: TourTypeState = {
  TourTypes: null,
};

const TourTypeSlice = createSlice({
  name: "TourTypes",
  initialState: initialTypesState,
  reducers: {
    SetTourTypes(
      state: TourTypeState = initialTypesState,
      action: PayloadAction<ITourType[]>
    ) {
      state.TourTypes = action.payload;
    },
  },
});
export default TourTypeSlice;
