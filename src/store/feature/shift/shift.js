import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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

export const postShift = createAsyncThunk(
  'shift/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { name, start_time, end_time, grace_period } = empData;
      console.log(name, start_time, end_time, grace_period);
      const {
        token,
        empData: { user_id },
      } = JSON.parse(localStorage.getItem('loginData'));

      const { status } = await axios.post(
        'http://savvy.developerpro.co/api/shift/add',
        {
          user_id,
          name,
          start_time,
          end_time,
          grace_period,
          active: '1',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (status) {
        toast('Shift Added', {
          position: 'bottom-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return status;
      }
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postShiftSlice = createSlice({
  name: 'postShift',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [postShift.pending]: (state) => {
      state.loading = true;
    },
    [postShift.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [postShift.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export { shiftSlice, postShiftSlice };
