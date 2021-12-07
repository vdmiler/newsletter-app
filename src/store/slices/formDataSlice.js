import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestUrl } from '../../constans';
import { getTokenKey } from '../../functions';

export const fetchFormData = createAsyncThunk(
   'news/fetchFormData',
   async function (info, { rejectWithValue }) {
      const token = await getTokenKey();
      try {
         const response = await axios({
            method: 'post',
            url: requestUrl + '/wp-json/wp/v2/feedback',
            data: {
               title: info.formData.name + ' - ' + info.formData.email,
               content: info.formData.message,
               status: 'publish'
            },
            headers: {
               'Content-Type': 'application/json',
               'accept': 'application/json',
               'Authorization': `Bearer ${token}`
            }
         })
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
);

const initialState = {
   formData: {},
   loadingForm: false,
   errorForm: null,
}

const formDataSlice = createSlice({
   name: 'formData',
   initialState,
   extraReducers: {
      [fetchFormData.pending]: (state, action) => {
         state.loadingForm = true;
      },
      [fetchFormData.fulfilled]: (state, action) => {
         state.loadingForm = false;
         state.formData = action.payload;
      },
      [fetchFormData.rejected]: (state, action) => {
         state.loadingForm = false;
         state.errorForm = action.payload;
      },
   }
});

export const { addFormData } = formDataSlice.actions;

export default formDataSlice.reducer;