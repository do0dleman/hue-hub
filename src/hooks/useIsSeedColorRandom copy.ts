import { useSelector } from "react-redux"
import { IRootState } from "../store/store"

export const useIsSeedColorRandom = () => {
    return useSelector((state: IRootState) => state.color.isSeedColorRandom)
}