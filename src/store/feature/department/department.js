import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getDepartments = createAsyncThunk(
  'departments/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        `${process.env.REACT_APP_API_BASEURL}department/get`,
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

const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getDepartments.pending]: (state) => {
      state.loading = true;
    },
    [getDepartments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getDepartments.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const postDepartment = createAsyncThunk(
  'department/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { name, office_id } = empData;

      const { token } = JSON.parse(localStorage.getItem('loginData'));

      const { status } = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}department/add`,
        {
          name,
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
        toast('Department Added', {
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

const postDepartmentSlice = createSlice({
  name: 'postDepartment',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [postDepartment.pending]: (state) => {
      state.loading = true;
    },
    [postDepartment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [postDepartment.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export { departmentsSlice, postDepartmentSlice };
