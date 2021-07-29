import { createContext, useReducer } from "react";

let stateContext = createContext();
export default stateContext;
let initialState = { currentState: 1, finishedState: 0 };
let reducer = (state, action) => {
  switch (action.type) {
    case "nextState":
      return { ...state, currentState: action.payload };
    case "finishedState":
      return { ...state, finishedState: action.payload };
    default:
      throw new Error("error");
  }
};
export function StateContextProvider(props) {
  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <stateContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </stateContext.Provider>
  );
}
