import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../..";

export const getImagesRework = createAsyncThunk(
  "Carousel/getAllImages",
  async () => {
    try {
      const { data } = await api.get(".json?t=all");

      //return all an data[] with the preview(this contains the images data[]) property
      const apiData = data?.data?.children.map((data: any) => {
        return data?.data?.url_overridden_by_dest;
      });
      return apiData;
    } catch (error) {}
  }
);

export const getAllImages = createAsyncThunk(
  "Carousel/getAllImages",
  async () => {
    try {
      const { data } = await api.get(".json?t=all");

      //return all an data[] with the preview(this contains the images data[]) property
      const apiData = data?.data?.children.map((data: any) => {
        return data?.data?.preview;
      });

      /* return a data[] with the image source array */
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
        .flat(Infinity); //flatten the array into one single array

      return imageUrls;
    } catch (error) {}
  }
);
