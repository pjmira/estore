import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
  products : [],
  status : "idle",
  error : ""
}
// const initialState = [
//   {
//     pName: "Jacket",
//     price: 50,
//     img: "shop-1.jpg"
//   },
//   {
//     pName: "Purse",
//     price: 50,
//     img: "shop-2.jpg"
//   },
//   {
//     pName: "Dress",
//     price: 50,
//     img: "shop-3.jpg"
//   },
//   {
//     pName: "Pants",
//     price: 50,
//     img: "shop-4.jpg"
//   },
//   {
//     pName: "Boots",
//     price: 50,
//     img: "shop-5.jpg"
//   },
//   {
//     pName: "Earrings",
//     price: 10,
//     img: "shop-6.jpeg"
//   },
//   {
//     pName: "Pants",
//     price: 50,
//     img: "shop-7.jpeg"
//   },
//   {
//     pName: "Sneakers",
//     price: 50,
//     img: "shop-8.jpg"
//   },
//   {
//     pName: "Shirt",
//     price: 50,
//     img: "shop-9.jpg"
//   },
//   {
//     pName: "Gold Earrings",
//     price: 50,
//     img: "shop-11.jpeg"
//   },
// ]

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers:{
    filterProducts : (state,action)=>{
        const filteredData = action.payload.products.filter((elem)=>{
          return elem.category_id===action.payload.selectedCategory.id;
        })
        state.products = filteredData;
    }
  },
  extraReducers : {
    [getProducts.pending] : (state,action)=>{
      state.status = "Loading...";
    },
    [getProducts.fulfilled] : (state,action)=>{
      state.status = "Success";
      state.products = action.payload;
    },
    [getProducts.rejected] : (state,action)=>{
      state.status = "Failed!"
      state.error = action.error.message;
    }

  }
})

export const {filterProducts} = productSlice.actions;
export default productSlice.reducer;