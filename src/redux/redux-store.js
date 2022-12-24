import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer} from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import { appReducer } from "./appReducer";

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;