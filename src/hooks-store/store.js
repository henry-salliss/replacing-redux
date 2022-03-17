import { useEffect, useState } from "react";

let globalState = {};

let listeners = [];
let actions = {};

export const useStore = () => {
  // only need updating state function
  const setState = useState(globalState)[1];

  const dispatch = (actionId, payload) => {
    const newState = actions[actionId](globalState, payload);

    // merge old and new state
    globalState = { ...globalState, ...newState };

    // replace the state in our listeners with the new global state
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  // when component uses store setState is pushed as a useable function
  useEffect(() => {
    listeners.push(setState);

    // when component unmounts all listeners except setState are removed
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
    actions = { ...actions, ...userActions };
  }
};
