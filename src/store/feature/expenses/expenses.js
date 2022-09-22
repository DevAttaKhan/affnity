import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getExpenses = createAsyncThunk(
  'expenses/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const items = JSON.parse(localStorage.getItem('loginData'));
      const { data: { response } = {} } = await axios.get(
        'http://savvy.developerpro.co/api/expense_type/get',
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
const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getExpenses.pending]: (state) => {
      state.loading = true;
    },
    [getExpenses.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getExpenses.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export const postExpense = createAsyncThunk(
  'expense/postData',
  async (empData, { rejectWithValue }) => {
    try {
      const { category_name, no_of_days } = empData;

      const { token } = JSON.parse(localStorage.getItem('loginData'));

      const { status } = await axios.post(
        'http://savvy.developerpro.co/api/add_expense_category',
        {
          category_name,
          no_of_days,
          active: '1',
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (status) {
        toast('Expense Added', {
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

const postExpenseSlice = createSlice({
  name: 'postExpense',
  initialState: {
    data: '',
    isSuccess: false,
    message: '',
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [postExpense.pending]: (state) => {
      state.loading = true;
    },
    [postExpense.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [postExpense.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export { expenseSlice, postExpenseSlice };
