import { combineReducers, createStore } from "redux";
import { calcReducer } from "./reducer";

const store = createStore(combineReducers({
  calc: calcReducer
}))

export type RootState = ReturnType<typeof store.getState>

export default store