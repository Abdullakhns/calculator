import { useDispatch } from "react-redux"
import { deleteDigit } from "../store/actions"

export const DeleteButton = () => {
  const dispatch = useDispatch()

  const onDeleteDigitHandle = () => {
    dispatch(deleteDigit())
  }

  return (
    <button className="operation" onClick={onDeleteDigitHandle}>DEL</button>
  )
}