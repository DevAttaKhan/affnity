import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      // const items = JSON.parse(localStorage.getItem('loginData'));
      // //multi-level
      // const { status } = await axios.post(
      //   'http://savvy.developerpro.co/api/employee/add',
      //   arg,
      //   {
      //     headers: {
      //       Authorization: 'Bearer ' + items.token,
      //     },
      //   }
      // );
      // if (status === 200) {
      //   toast('User Added', {
      //     position: 'bottom-right',
      //     autoClose: 2500,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      // }
      // return status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getEmployeesSlice = createSlice({
  name: 'getEmployees',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
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

const postEmployeeSlice = createSlice({
  name: 'postEmployee',
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
  },
});

export const getEmployeeTypes = createAsyncThunk(
  'employeeTypes/getData',
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

const employeeTypesSlice = createSlice({
  name: 'employeeTypes',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getEmployeeTypes.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getEmployeeTypes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getEmployeeTypes.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export { getEmployeesSlice, postEmployeeSlice, employeeTypesSlice };
