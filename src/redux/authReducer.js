import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../components/api/api";

const SET_USER_DATA = "react-project/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "react-project/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.getAuthData();

  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha = null) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message = data.messages.length > 0 ? data.messages[0] : "Error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(getCaptchaUrlSuccess(data.url));
};
