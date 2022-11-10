import { configureStore } from "@reduxjs/toolkit";
import { useEffect, useState, useStore } from "react";
import { createStore } from "redux";
import { combainReducers } from "redux";

function App() {
  const [test, setTest] = useState("1");

  const initialState = {};

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "first":
        return { ...state, ...payload };

      default:
        return state;
    }
  };

  const store = new configureStore();

  return <div className="App"></div>;
}

export default App;
