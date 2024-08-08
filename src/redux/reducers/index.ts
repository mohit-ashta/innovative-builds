import { combineReducers } from "@reduxjs/toolkit";
import teamSlice from "../teamslice/index";
import projetcSlice from "../projetcSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  addteam: teamSlice,
  addproject: projetcSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
