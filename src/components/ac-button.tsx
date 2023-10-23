import { useDispatch } from "react-redux"
import { clear } from "../store/actions"

export const ACButton = () => {
  const dispatch = useDispatch()

  const onClearHandle = () => {
    dispatch(clear())
  }

  return (
    <button className="span-two operation" onClick={onClearHandle}>AC</button>
  )
}