import { useSelector } from "react-redux";
import { ACButton } from "./components/ac-button";
import { DeleteButton } from "./components/delete-button";
import { DigitButton } from "./components/digit-button";
import { EvaluateButton } from "./components/evaluate-button";
import { OperationButton } from "./components/operation-button";
import { getCalc } from "./store/reducer";

function App() {
  const calc = useSelector(getCalc)

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{calc.previousOperand} {calc.operation}</div>

          <div className="current-operand">{calc.currentOperand}</div>
        </div>

        <ACButton />

        <DeleteButton />

        <OperationButton operation="/" />

        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <OperationButton operation="*" />

        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <OperationButton operation="+" />

        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />

        <OperationButton operation="-" />

        <DigitButton digit="." />
        <DigitButton digit="0" />

        <EvaluateButton />
      </div>
    </>
  );
}

export default App;
