import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getLeaves = createAsyncThunk(
  'leaves/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        'http://savvy.developerpro.co/api/leave_categories/get',
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
const leaveSlice = createSlice({
  name: 'leave',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getLeaves.pending]: (state) => {
      state.loading = true;
    },
    [getLeaves.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getLeaves.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const postLeave = createAsyncThunk(
  'leave/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { name, start_time, end_time, grace_period, office_id } = empData;

      const {
        token,
        empData: { user_id },
      } = JSON.parse(localStorage.getItem('loginData'));

      const { status } = await axios.post(
        'http://savvy.developerpro.co/api/leave_request/add',
        {
          user_id,
          name,
          start_time,
          end_time,
          grace_period,
          office_id,
          active: '1',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (status) {
        toast('Leave Added', {
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

const postLeaveSlice = createSlice({
  name: 'postLeave',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [postLeave.pending]: (state) => {
      state.loading = true;
    },
    [postLeave.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [postLeave.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export { leaveSlice, postLeaveSlice };
