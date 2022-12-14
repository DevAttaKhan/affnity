import { configureStore } from '@reduxjs/toolkit';
import {
  departmentsSlice,
  postDepartmentSlice,
} from './feature/department/department';
import {
  getEmployeesSlice,
  postEmployeeSlice,
} from './feature/employee/employee';
import { officesSlice, postOfficeSlice } from './feature/office/office';
import { shiftSlice, postShiftSlice } from './feature/shift/shift';
import { leaveSlice, postLeaveSlice } from './feature/leave/leave';
import { expenseSlice, postExpenseSlice } from './feature/expenses/expenses';
import { loanSlice, postLoanSlice } from './feature/loan/loans';
import {
  employeeTypeSlice,
  postEmployeeTypeSlice,
} from './feature/employeeType/employeeType';
import {
  leaveRequestSlice,
  postLeaveRequestSlice,
} from './feature/leaveRequest/leaveRequest';

export const store = configureStore({
  reducer: {
    employees: getEmployeesSlice.reducer,
    postEmployee: postEmployeeSlice.reducer,
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
    loans: loanSlice.reducer,
    postLoan: postLoanSlice,
    employeeTypes: employeeTypeSlice.reducer,
    postEmployeeType: postEmployeeTypeSlice.reducer,
    leaveRequest: leaveRequestSlice,
    postLeaveRequest: postLeaveRequestSlice,
  },
});
