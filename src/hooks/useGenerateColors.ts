import { useDispatch } from "react-redux"
import { generateColors } from "../store/color/colorSlice"

export const useGenerateColors = () => {
    const dispatch = useDispatch()
    return () => { dispatch(generateColors()) }
}