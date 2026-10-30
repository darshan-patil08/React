import { createSlice } from "@reduxjs/toolkit";


const authReducer = createSlice({
        name : "auth",
        initialState :{
        user : null,
        isAuthenticated : false
        },
        reducers:{
            addUser : (state,action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
            },
            removeUser : (state) => {
                state.user = null;
                state.isAuthenticated = false;
            },
        },
});

export const {addUser, removeUser} = authReducer.actions;

export default authReducer.reducer;