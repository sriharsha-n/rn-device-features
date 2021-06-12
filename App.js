import React from "react";
import {Provider} from 'react-redux'
import { StyleSheet, Text, View } from "react-native";
import PlacesNavigation from "./navigation/PlacesNavigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import placesReducer from './store/places-reducer'
import { createPromise } from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  places: placesReducer,
});

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const store = createStore(rootReducer,applyMiddleware(createPromise(), thunk, createLogger()));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
