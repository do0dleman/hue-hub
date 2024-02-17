import { useDispatch } from "react-redux"
import { setIsSeedColorRandom } from "../store/color/colorSlice"

export const useSetSeedColorRandom = () => {
    const dispatch = useDispatch()
    return (isRandom: boolean) => dispatch(setIsSeedColorRandom(isRandom))
}