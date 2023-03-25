import { createSlice } from "@reduxjs/toolkit";
import { getAllImages } from "../../thunks/carousel/carousel";

const initialState: CarouselState = {
  loading: false,
  images: [],
};

const carouselSlice = createSlice({
  name: "Carousel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllImages.fulfilled, (state, action) => {
      state.loading = false;
      state.images = action.payload;
    });
  },
});

type CarouselState = {
  loading: boolean;
  images: any[];
};

export default carouselSlice.reducer;
