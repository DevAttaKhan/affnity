import { configureStore } from '@reduxjs/toolkit';
import {
  departmentsSlice,
  postDepartmentSlice,
} from './feature/department/department';
import {
  getEmployeesSlice,
  employeeTypesSlice,
  postEmployeeSlice,
} from './feature/employee/employee';
import { officesSlice, postOfficeSlice } from './feature/office/office';
import { shiftSlice, postShiftSlice } from './feature/shift/shift';
import { leaveSlice, postLeaveSlice } from './feature/leave/leave';
import { expenseSlice, postExpenseSlice } from './feature/expenses/expenses';
export const store = configureStore({
  reducer: {
    employees: getEmployeesSlice.reducer,
    postEmployee: postEmployeeSlice.reducer,
    employeeTypes: employeeTypesSlice.reducer,
    departments: departmentsSlice.reducer,
    postDepartment: postDepartmentSlice.reducer,
    offices: officesSlice.reducer,
    postOffice: postOfficeSlice,
    shifts: shiftSlice.reducer,
    postShift: postShiftSlice.reducer,
    leaves: leaveSlice.reducer,
    postLeave: postLeaveSlice.reducer,
    expenses: expenseSlice.reducer,
    postExpense: postExpenseSlice.reducer,
  },
});
