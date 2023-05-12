import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "./logger";
import { encryptTransform } from "redux-persist-transform-encrypt";
import TourTypeSlice from "./TourTypes/tourType-slice";

const reducers = combineReducers({
  TourTypesReducer: TourTypeSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "Adviser-",
    storage,
    transforms: [
      encryptTransform({
        secretKey: process.env.NEXT_PUBLIC_SECRET_KEY,
        onError: function (error) {
          console.log(error);
        },
      }),
    ],
  },
  reducers
);
export const store = configureStore({
  reducer: { Store: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
