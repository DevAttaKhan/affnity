import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loggedIn: false,
}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleLogIn: (state) => {
            state.loggedIn = true
        },
        handleLogOut: (state) => {
            state.loggedIn = false
        }
    }
});


export const {handleLogIn, handleLogOut} = authSlice.actions;
export default authSlice.reducer;
