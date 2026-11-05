import { createSlice } from '@reduxjs/toolkit'
import { hydrateUser, loginUserAction } from './authActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user : null,
    isAuthenticated : false,
    isLoading : false,
  },
  reducers: {
    addUser : (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser : (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginUserAction.fulfilled, (state,action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    })
    .addCase(loginUserAction.rejected, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;

    }).addCase(hydrateUser.pending, (state) => {
      state.isLoading = true;
      
    }).addCase(hydrateUser.fulfilled, (state,action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    }).addCase(hydrateUser.rejected, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    })
  }
})

export const {addUser, removeUser} = authSlice.actions;
export default authSlice.reducer;
