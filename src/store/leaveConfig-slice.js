import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputs: [
    {
      label: "Category Name",
      name: "categoryName",
      type: "text",
      value: "",
    },
    {
      label: "Allowed Leaves",
      name: "allowedLeaves",
      type: "text",
      value: "",
    },
    {
      label: "Applied To",
      name: "appliedTo",
      type: "text",
      value: "",
    },
    {
      label: "Employee Type",
      name: "employeeType",
      type: "text",
      value: "",
    },
  ],
};

const leaveConfigSlice = createSlice({
  name: "leaveConfig",
  initialState,
  reducers: {},
});
