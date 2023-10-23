import { Action } from "./actions";
import { Calc } from "./state";
import { RootState } from "./store";

let initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
  overwrite: false,
};

const evaluate = (operand: Calc) => {
  const { currentOperand, previousOperand, operation } = operand;

  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  // if (isNaN(prev) || isNaN(current)) return "";

  let computation: number = 0

  switch (operation) {
    case "÷":
      computation = prev / current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
  }

  return computation.toString()
};

export const calcReducer = (state: Calc = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload.digit,
          overwrite: false,
        };
      }

      if (action.payload.digit === "." && !state.currentOperand) {
        return {
          ...state, currentOperand: "0."
        }
      }

      if (action.payload.digit === "0" && state.currentOperand === "0")
        return state;

      if (action.payload.digit === "." && state.currentOperand.includes("."))
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload.digit}`,
      };

    case "CHOOSE_OPERATION":
      if (state.currentOperand === "" && state.previousOperand === "")
        return state;

      if (state.currentOperand === "") {
        return {
          ...state,
          operation: action.payload.operation,
        };
      }

      if (state.previousOperand === "") {
        return {
          ...state,
          operation: action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: "",
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload.operation,
        currentOperand: "",
      };

    case "EVALUATE":
      if (
        state.operation === "" ||
        state.currentOperand === "" ||
        state.previousOperand === ""
      )
        return state;

      return {
        ...state,
        overwrite: true,
        previousOperand: "",
        operation: "",
        currentOperand: evaluate(state),
      };

    case "CLEAR":
      return { ...initialState };

    case "DELETE_DIGIT":
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: "",
        };
      }

      if (state.currentOperand === "") return state;

      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: "",
        };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    default:
      return state;
  }
};

export const getCalc = (state: RootState) => state.calc;
