import { configureStore } from '@reduxjs/toolkit';
import departmentsSlice from './feature/department/department';
import {
  getEmployeeSlice,
  employeeTypeSlice,
  postEmployeeSlice,
} from './feature/employee/employee';
import officesSlice from './feature/office/office';
import shiftSlice from './feature/shift/shift';

export const store = configureStore({
  reducer: {
    employee: getEmployeeSlice.reducer,
    postEmployee: postEmployeeSlice.reducer,
    employeeType: employeeTypeSlice.reducer,
    departments: departmentsSlice.reducer,
    offices: officesSlice.reducer,
    shift: shiftSlice.reducer,
  },
});
