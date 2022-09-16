import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployee = createAsyncThunk(
  'employee/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      //multi-level
      const { data: { response } = {} } = await axios.get(
        'http://savvy.developerpro.co/api/employee/get',
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
export const postEmployee = createAsyncThunk(
  'employee/postData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      //multi-level
      const { data: { response } = {} } = await axios.post(
        'http://savvy.developerpro.co/api/employee/add',
        arg,
        {
          headers: {
            Authorization: 'Bearer ' + items.token,
          },
        }
      );

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [postEmployee.pending]: (state) => {
      state.loading = true;
    },
    [postEmployee.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [postEmployee.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },

    [getEmployee.pending]: (state) => {
      state.loading = true;
    },
    [getEmployee.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getEmployee.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const getEmployeeType = createAsyncThunk(
  'employeeType/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      //multi-level
      const { data: { response } = {} } = await axios.get(
        'http://savvy.developerpro.co/api/employee_type/get',
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

const employeeTypeSlice = createSlice({
  name: 'employeeType',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getEmployeeType.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getEmployeeType.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getEmployeeType.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export { employeeSlice, employeeTypeSlice };
