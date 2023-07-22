import { useSelector } from "react-redux"
import { IRootState } from "../store/store"

export const useDisplayType = () => {
    return useSelector((state: IRootState) => state.color.displayType)
}