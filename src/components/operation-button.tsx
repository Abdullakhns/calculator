import { useDispatch } from "react-redux";
import { chooseOperation } from "../store/actions";

type Props = {
  operation: string;
};

export const OperationButton = ({ operation }: Props) => {
  const dispatch = useDispatch();

  const onOperationHandle = () => {
    dispatch(chooseOperation(operation));
  };

  return <button className="operation" onClick={onOperationHandle}>{operation}</button>;
};
