import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   bookId: null,
   modalOpen: false,
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