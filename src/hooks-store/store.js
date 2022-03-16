import { useEffect, useState } from "react";

let globalState = {};

let listeners = [];
let actions = {};

const useStore = () => {
  // only need updating state function
  const setState = useState(globalState)[1];

  // when component uses store setState is pushed as a useable function
  useEffect(() => {
    listeners.push(setState);

    // when component unmounts all listeners except setState are removed
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, []);
};
