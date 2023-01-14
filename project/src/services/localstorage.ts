
export type Token = string;
const tokenKey = 'auth-jwt-token';

export const getToken = (): Token => {
  const token = localStorage.getItem(tokenKey);
  return token ? token : '';
};

export const setToken = (token: Token): void => {
  localStorage.setItem(tokenKey, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(tokenKey);
};
