import { useDispatch } from "react-redux";
import { addDigit } from "../store/actions";

type Props = {
  digit: string;
};

export const DigitButton = ({ digit }: Props) => {
  const dispatch = useDispatch();

  const onAddDigitHandle = () => {
    dispatch(addDigit(digit));
  };

  return <button onClick={onAddDigitHandle}>{digit}</button>;
};
