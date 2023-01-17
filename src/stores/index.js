import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '@/stores/filterSlice';

export default configureStore({
   reducer: {
      filter: filterReducer,
   }
})