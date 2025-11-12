// import createAsyncThunk from redux toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios
import axios from "axios";

// import category type
import type { TCategory } from "@customTypes/category";

// define the response type
type TResponse = {
  id: number;
  title: string;
  prefix: string;
  img: string;
};

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_payload, thunkAPI) => {
    // destructure rejectWithValue from thunkAPI
    // to handle errors
    const { rejectWithValue } = thunkAPI;

    // make the api call
    // get the categories list
    try {
      const response = await axios.get<TCategory[]>(
        "http://localhost:5005/categories"
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

export default actGetCategories;
