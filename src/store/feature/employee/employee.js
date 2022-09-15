import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getEmployee = createAsyncThunk('employee/getData',(arg,{rejectWithValue})=>{
    try {
        const data = axios.get('http://savvy.developerpro.co/api/employee/get');
        console.log(data);        
    } catch (error) {
        rejectWithValue(error)
    }
})

const employeeSlice = createSlice({
    name:'employee',
    initialState:{
        data:'',
        isSuccess:false,
        message:'',
        loading:false,
    },
    reducers:{
    },
    extraReducers:{
        [getEmployee.pending]:(state,{payload})=>{
            state.loading = true; 
        }
    }
})

export default employeeSlice;