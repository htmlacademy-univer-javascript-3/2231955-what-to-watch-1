import {AuthStatus} from '../../types/auth';
import {AuthProcess, NameSpace} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';
import {getAuthStatus, loginAction, logout} from '../../api/api-actions';

const initialState: AuthProcess = {
  authStatus: AuthStatus.Unknown,
  user: null,
};

export const authProcess = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAuthStatus.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Authorized;
        state.user = action.payload;
      })
      .addCase(getAuthStatus.rejected, (state) => {
        state.authStatus = AuthStatus.Unauthorized;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Authorized;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.Unauthorized;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthStatus.Unauthorized;
      });
  }
});
