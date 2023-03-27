import { createSlice } from "@reduxjs/toolkit";
import { getImagesRework } from "../../thunks/carousel/carousel";

const initialState: CarouselState = {
  loading: false,
  images: [],
};

const carouselSlice = createSlice({
  name: "Carousel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImagesRework.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getImagesRework.fulfilled, (state, action) => {
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
