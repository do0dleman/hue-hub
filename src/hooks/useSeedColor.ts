import { useSelector } from "react-redux"
import { IRootState } from "../store/store"
import { Color } from "do0dle-colors"

export const useSeedColor = () => {
    return new Color(useSelector((state: IRootState) => state.color.seedColor))
}