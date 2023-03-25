import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../..";

export const getAllImages = createAsyncThunk(
  "Carousel/getAllImages",
  async () => {
    try {
      const { data } = await api.get(".json?t=all");
      //console.log();

      const apiData = data?.data?.children.map((data: any) => {
        return data?.data?.preview;
      });

      const images = apiData?.map((data: any) => {
        return data?.images.map((image: any) => {
          return image?.source;
        });
      });

      const imageUrls = images
        .map((image: any) => {
          return image?.map((item: any, index: number) => {
            return item?.url;
          });
        })
        .flat(Infinity);

      //console.log(flattenImageUrls);

      return imageUrls;
    } catch (error) {}
  }
);
