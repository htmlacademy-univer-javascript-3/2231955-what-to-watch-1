
export type Token = string;
const token_key = 'auth-jwt-token';

export const getToken = (): Token => {
  const token = localStorage.getItem(token_key);
  return token ? token: '';
};

export const setToken = (token: Token): void => {
  localStorage.setItem(token_key, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(token_key);
};
