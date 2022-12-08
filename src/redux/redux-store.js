import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer} from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));