import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestUrl } from '../../constans';

export const fetchImageData = createAsyncThunk(
   'news/fetchImageData',
   async function (imageId, { rejectWithValue }) {
      try {
         const response = await axios.get(requestUrl + '/wp-json/wp/v2/media' + '/' + imageId)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
);

const initialState = {
   imageData: null,
   loadingImage: false,
   errorImage: null,
}

const imageDataSlice = createSlice({
   name: 'imageData',
   initialState,
   reducers: {
      cleaningImageData(state, action) {
         state.imageData = null;
      }
   },
   extraReducers: {
      [fetchImageData.pending]: (state, action) => {
         state.loadingImage = true;
      },
      [fetchImageData.fulfilled]: (state, action) => {
         state.loadingImage = false;
         state.imageData = action.payload;
      },
      [fetchImageData.rejected]: (state, action) => {
         state.loadingImage = false;
         state.errorImage = action.payload;
      },
   }
});

export const { cleaningImageData } = imageDataSlice.actions;

export default imageDataSlice.reducer;