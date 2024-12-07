import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../Reducers/adminSlice';
import postReducer from '../Reducers/postSlice';
import bulletinReducer from "../Reducers/bulletinSlice"




const store = configureStore({
  reducer: {
    admins: adminReducer,
    posts: postReducer,
    bulletines:bulletinReducer
  },
});

export default store;
