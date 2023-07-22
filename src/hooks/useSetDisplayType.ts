import { useDispatch } from "react-redux"
import { setDisplayType } from "../store/color/colorSlice"
import { displayType } from "../store/color/types/displayType"

export const useSetDisplayType = () => {
    const dispatch = useDispatch()
    return (displayType: displayType) => { dispatch(setDisplayType(displayType)) }
}