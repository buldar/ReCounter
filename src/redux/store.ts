import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducer";
import thunk from "redux-thunk";

const reducers = combineReducers(
    {
        counter: counterReducer
    }
)

export type AppStateType = ReturnType<typeof reducers>

export const store = legacy_createStore(reducers, applyMiddleware(thunk))

type AppStoreType = typeof store

