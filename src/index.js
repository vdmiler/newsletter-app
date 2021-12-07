import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import newsListReducer from './store/slices/newsListSlice';
import newsDetailReducer from './store/slices/newsDetailSlice';
import imageDataReducer from './store/slices/imageDataSlice';
import formDataReducer from './store/slices/formDataSlice';

const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    newsDetail: newsDetailReducer,
    imageData: imageDataReducer,
    formData: formDataReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

