export type Action = {
  type:
    | "ADD_DIGIT"
    | "CHOOSE_OPERATION"
    | "CLEAR"
    | "EVALUATE"
    | "DELETE_DIGIT";
  payload: any;
};

export const addDigit = (digit: string) => ({
  type: "ADD_DIGIT",
  payload: { digit },
});

export const chooseOperation = (operation: string) => ({
  type: "CHOOSE_OPERATION",
  payload: { operation },
});

export const clear = () => ({
  type: "CLEAR",
  payload: {},
});

export const evaluate = () => ({
  type: "EVALUATE",
  payload: {},
});

export const deleteDigit = () => ({
  type: "DELETE_DIGIT",
  payload: {},
})
