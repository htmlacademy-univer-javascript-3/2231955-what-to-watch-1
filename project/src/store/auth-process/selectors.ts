import {NameSpace, State} from "../../types/state";
import {AuthStatus, LogInError, UserInfo} from "../../types/auth";

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.Auth].authStatus;

export const getUser = (state: State): UserInfo | null => state[NameSpace.Auth].user;
