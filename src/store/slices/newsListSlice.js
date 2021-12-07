import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestUrl } from '../../constans';


export const fetchNewsList = createAsyncThunk(
   'news/fetchNewsList',
   async function (_, { rejectWithValue }) {
      try {
         const response = await axios.get(requestUrl + '/wp-json/wp/v2/news')
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
);

const initialState = {
   newsList: null,
   loadingList: false,
   errorList: null,
}

const newsListSlice = createSlice({
   name: 'newsList',
   initialState,
   extraReducers: {
      [fetchNewsList.pending]: (state, action) => {
         state.loadingList = true;
      },
      [fetchNewsList.fulfilled]: (state, action) => {
         state.loadingList = false;
         state.newsList = action.payload;
      },
      [fetchNewsList.rejected]: (state, action) => {
         state.loadingList = false;
         state.errorList = action.payload;
      },
   }
});

export default newsListSlice.reducer;