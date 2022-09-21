import { configureStore } from '@reduxjs/toolkit';
import departmentsSlice from './feature/department/department';
import {
  getEmployeesSlice,
  employeeTypesSlice,
  postEmployeeSlice,
} from './feature/employee/employee';
import officesSlice from './feature/office/office';
import { shiftSlice, postShiftSlice } from './feature/shift/shift';
import { leaveSlice, postLeaveSlice } from './feature/leave/leave';
export const store = configureStore({
  reducer: {
    employees: getEmployeesSlice.reducer,
    postEmployee: postEmployeeSlice.reducer,
    employeeTypes: employeeTypesSlice.reducer,
    departments: departmentsSlice.reducer,
    offices: officesSlice.reducer,
    shifts: shiftSlice.reducer,
    postShift: postShiftSlice.reducer,
    leaves: leaveSlice.reducer,
    postLeave: postLeaveSlice.reducer,
  },
});
