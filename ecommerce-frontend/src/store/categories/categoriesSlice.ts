import { createSlice } from "@reduxjs/toolkit";

// import the async thunk action
import actGetCategories from "./act/actGetCategories";

// import loading types
import type { TLoading } from "@customTypes/shared";
import type { TCategory } from "@customTypes/category";

// recors : array of objects with id, title, prefix, img

/* 
loading : { 
    idle : no loading, 
    pending : the request has started executing. you can use it to show a loading spinner or disable buttons, 
    succeeded : the request completed successfully and the data was received from the server. you can use it to show the data to the user,
    failed : the request did not complete or an error occurred. You can use it to show an error message to the user or to retry the request
}
*/

interface ICategoriesState {
  // records: { id: number; title: string; prefix: string; img: string }[];
  records: TCategory[];
  // loading: "idle" | "pending" | "succeeded" | "failed";
  loading: TLoading;
  error: string | null;
}

// define the initial state using that type
const initState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

// create the slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState: initState,
  reducers: {},
  // the createAsyncThunk generates three action types pending, fulfilled, rejected
  extraReducers(builder) {
    // if actGetCategories is pending
    // it means the request has started executing
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    // if actGetCategories is fulfilled
    // it means the request completed successfully
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    // if actGetCategories is rejected
    // it means the request did not complete or an error occurred
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      // check if action.payload is a string
      if (action.payload && typeof action.payload === "string") {
        // if it is a string, set the error message
        state.error = action.payload;
      }
    });
  },
});

// export the async thunk action
export { actGetCategories };

// export the reducer
export default categoriesSlice.reducer;
