import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "../reducers";

const store = configureStore({
  reducer: persistedReducer,
  middleware: (mid) =>
    mid({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
