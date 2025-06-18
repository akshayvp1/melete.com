import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedAuthReducer from "../features/authSlice";
import tempUser from "../features/tempSlice";

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        tempUser: tempUser, 
    }
});

// ✅ Define and export RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export { store };
export default store;
