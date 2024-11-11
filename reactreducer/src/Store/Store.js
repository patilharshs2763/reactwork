import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/Reducer/userReducer";
// configureStore is used to creat store
export const store = configureStore({
    reducer: {
        userData: userReducer,
        collegeData:userReducer,
    },
    //disable devTools for production
    // devTools:false
});
export default store;
