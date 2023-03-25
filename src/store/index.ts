import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import carouselReducer from "./slices/carousel/carousel";

const reducer = combineReducers({
  carousel: carouselReducer,
});

const store = configureStore({
  reducer,
});

const useSelector: TypedUseSelectorHook<State> = useAppSelector;
const useDispatch: () => AppDispatch = useAppDispatch;

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://www.reddit.com/r/aww/top/",
});

type AppDispatch = typeof store.dispatch;

declare global {
  export type State = ReturnType<typeof reducer>;
}

export { store, useSelector, useDispatch, api };
