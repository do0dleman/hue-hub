import { createSlice } from "@reduxjs/toolkit";
import { Color, genMethod, genMethods } from "do0dle-colors";
import { displayType } from "./types/displayType";
import okLCh from "do0dle-colors/lib/types/okLChType";

const COLORS_AMOUNT = 5

const initialColor: [number, number, number] = [Math.random() * 100 / 2 + 50, Math.random() * 100, Math.random() * 360] as okLCh

const initialState = {
    seedColor: initialColor,
    colors: new Color(initialColor).getColorScheme(COLORS_AMOUNT).map(color => color.getOkLChArray()),
    genMethod: genMethods[0] as genMethod,
    displayType: 'hex' as displayType,
    isSeedColorRandom: true
}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        generateSeedColor: (state) => {
            state.seedColor = [Math.random(), Math.random(), Math.random() * 360]
        },
        generateColors: (state) => {
            state.colors = new Color(state.seedColor).getColorScheme(COLORS_AMOUNT, state.genMethod)
                .map(color => color.getOkLChArray())
        },
        setGenMethod: (state, action: { payload: genMethod }) => {
            state.genMethod = action.payload
        },
        setSeedColor: (state, action: { payload: [number, number, number] }) => {
            const seedColor = new Color(action.payload, 'OkLCh', false)
            const hsl = seedColor.getHslArray()
            document.body.style.setProperty('--hue', `${hsl[0]}deg`)
            document.body.style.setProperty('--sat', `${Math.round(hsl[1])}%`)
            document.body.style.setProperty('--light', `${Math.round(hsl[2])}%`)
            document.body.style.setProperty('--seed-color', seedColor.getCssHsl())
            state.seedColor = action.payload
        },
        setDisplayType: (state, action: { payload: displayType }) => {
            state.displayType = action.payload
        },
        setIsSeedColorRandom: (state, action: { payload: boolean }) => {
            state.isSeedColorRandom = action.payload
        }
    }
})

export const { generateColors, generateSeedColor, setGenMethod, setSeedColor, setDisplayType, setIsSeedColorRandom } = colorSlice.actions