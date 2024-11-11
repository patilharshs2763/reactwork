import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../reducers/index';
import counterReducer from '../Reducer/counterReducer';

const store = configureStore({
    reducer: counterReducer,
});

export default store;