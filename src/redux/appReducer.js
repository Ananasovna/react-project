import { getAuthUserData } from "./authReducer";

const AUTHORIZATION_COMPLETED = 'react-project/app/AUTHORIZATION-COMPLETED';

let initialState = {
  authCompleted: false,
};

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTHORIZATION_COMPLETED: {
      return {...state, authCompleted: true};
    }
    default:
      return state;
  }
};

export const setAuthCompleted = () => ({type: AUTHORIZATION_COMPLETED});

export const setAuthApp = () => async (dispatch) => {
  await dispatch(getAuthUserData());
  dispatch(setAuthCompleted());

  
}