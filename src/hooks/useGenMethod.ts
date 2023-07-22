import { useSelector } from "react-redux"
import { IRootState } from "../store/store"

export const useGenMethod = () => {
    return useSelector((state: IRootState) => state.color.genMethod)
}