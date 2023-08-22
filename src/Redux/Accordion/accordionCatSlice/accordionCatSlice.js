import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Men",
    items: ["Coats", "Boots", "Party Wear", "Shirts"]
  },
  {
    category: "Women",
    items: ["Coats", "Boots", "Party Wear", "Shirts"]
  }, {
    category: "Kids",
    items: ["Coats", "Boots", "Party Wear", "Shirts"]
  }
]

const accordionSlice = createSlice({
  name: "Accordion Slice",
  initialState
})
 
export default accordionSlice;