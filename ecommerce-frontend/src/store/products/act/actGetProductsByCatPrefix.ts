// import createAsyncThunk from redux toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios
import axios from "axios";

// import product type
import type { TProduct } from "@customTypes/product";

// define the response type
type TResponse = {
  id: number;
  title: string;
  cat_prefix: string;
  img: string;
  price: string;
};

const actGetProductsByCatPrefix = createAsyncThunk<TProduct[], string>(
  "categories/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    // destructure rejectWithValue from thunkAPI
    // to handle errors
    const { rejectWithValue } = thunkAPI;

    // make the api call
    // get the products by category prefix
    try {
      const response = await axios.get<TResponse[]>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      // return the data
      return response.data;
    } catch (error) {
      // handle the error
      // check if the error is an axios error
      // if it is, return the error message from the response
      // else return a generic error message
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export default actGetProductsByCatPrefix;
