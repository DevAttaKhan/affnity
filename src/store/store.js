import { configureStore } from '@reduxjs/toolkit';
import departmentsSlice from './feature/department/department';
import { employeeSlice, employeeTypeSlice } from './feature/employee/employee';
import officesSlice from './feature/office/office';

export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
    employeeType: employeeTypeSlice.reducer,
    departments: departmentsSlice.reducer,
    offices: officesSlice.reducer,
  },
});
