import { createSlice } from "@reduxjs/toolkit";
import booksList from 'list/booksdb';

const initialState = {
   bookId: null,
   modalOpen: false,
   books : booksList,
}

//REFACTOR:unneccesary redux file. one file can be deleted or concate file  
export const bookShopSlice = createSlice({
   name: "bookShop",
   initialState,
   reducers: {
      setBookId: (state, action) => {
         state.bookId = action.payload;
      },
      setModalToggle: (state, action) => {
         state.modalOpen = action.payload;
      }
   }
});

export const { setBookId, setModalToggle } = bookShopSlice.actions;
export default bookShopSlice.reducer