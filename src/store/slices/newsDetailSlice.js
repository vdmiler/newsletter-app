import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestUrl } from '../../constans';

export const fetchNewsDetail = createAsyncThunk(
   'news/fetchNewsDetail',
   async function (id, { rejectWithValue }) {
      try {
         const response = await axios.get(requestUrl + '/wp-json/wp/v2/news' + '/' + id)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
);

const initialState = {
   newsDetail: null,
   loadingDetail: false,
   errorDetail: null,
}

const newsDetailSlice = createSlice({
   name: 'newsDetail',
   initialState,
   extraReducers: {
      [fetchNewsDetail.pending]: (state, action) => {
         state.loadingDetail = true;
      },
      [fetchNewsDetail.fulfilled]: (state, action) => {
         state.loadingDetail = false;
         state.newsDetail = action.payload;
      },
      [fetchNewsDetail.rejected]: (state, action) => {
         state.loadingDetail = false;
         state.errorDetail = action.payload;
      },
   }
});

export default newsDetailSlice.reducer;