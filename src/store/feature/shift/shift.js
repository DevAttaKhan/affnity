import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getShifts = createAsyncThunk(
  'shifts/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        'http://savvy.developerpro.co/api/shift/get',
        {
          headers: {
            Authorization: 'Bearer ' + items.token,
          },
        }
      );

      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const shiftSlice = createSlice({
  name: 'shift',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getShifts.pending]: (state) => {
      state.loading = true;
    },
    [getShifts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getShifts.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default shiftSlice;
