import { useSelector } from "react-redux"
import { IRootState } from "../store/store"

export const useColors = () => {
    return useSelector((state: IRootState) => state.color.colors)
}