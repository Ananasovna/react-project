import {combineReducers, legacy_createStore as createStore} from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
});

export let store = createStore(reducers);