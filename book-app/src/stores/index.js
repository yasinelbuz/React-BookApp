import { configureStore } from '@reduxjs/toolkit';
import filterReducer from 'stores/filterSlice';
import bookShopReducer from 'stores/bookShopSlice';

export default configureStore({
   reducer: {
      filter: filterReducer,
      bookShop: bookShopReducer,
   }
})