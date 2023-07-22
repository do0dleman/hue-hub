import { useDispatch } from "react-redux"
import { setGenMethod } from "../store/color/colorSlice"
import { genMethod } from "do0dle-colors"

export const useSetGenMethod = () => {
    const dispatch = useDispatch()
    return (genMethod: genMethod) => { dispatch(setGenMethod(genMethod)) }
}