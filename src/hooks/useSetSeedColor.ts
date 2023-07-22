import { useDispatch } from "react-redux"
import { setSeedColor } from "../store/color/colorSlice"

export const useSetSeedColor = () => {
    const dispatch = useDispatch()
    return (color: [number, number, number]) => { dispatch(setSeedColor(color)) }
}