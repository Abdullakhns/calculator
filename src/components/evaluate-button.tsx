import { useDispatch } from "react-redux";
import { evaluate } from "../store/actions";

export const EvaluateButton = () => {
  const dispatch = useDispatch();

  const onEvaluateHandle = () => {
    dispatch(evaluate());
  };
  return <button className="span-two operation" onClick={onEvaluateHandle}>=</button>;
};
