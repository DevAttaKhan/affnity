import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './feature/employee/employee'

export const store = configureStore({
  reducer: { employee:employeeSlice.reducer },
})