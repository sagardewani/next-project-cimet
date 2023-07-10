import moment from "moment";

export const addTokenToStorage = (token) => {
  localStorage.setItem('tokenInfo', JSON.stringify({
    token,
    created_at: new Date(),
    expires_in: 10800 - 15
  }));
};

export const getTokenFromStorage = () => {
  return JSON.parse(localStorage.getItem('tokenInfo'));
};

export const isTokenExpired = (tokenInfo) => {
  if (!tokenInfo) {
    return true;
  }
  const {expires_in, created_at} = tokenInfo;
  const now = moment().toDate();
  const expiresAt = moment(created_at).add(expires_in, 'seconds').toDate();
  return now > expiresAt;
};

export const removeTokenFromStorage = () => {
  localStorage.removeItem('tokenInfo');
};
