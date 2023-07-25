import { createSlice } from "@reduxjs/toolkit";
import { Color, genMethod, genMethods } from "do0dle-colors";
import { displayType } from "./types/displayType";

const COLORS_AMOUNT = 5

const initialColor: [number, number, number] = [Math.random() * 360, Math.random() * 100, Math.random() * 100]

const initialState = {
    seedColor: initialColor,
    colors: new Color(initialColor).getColorScheme(COLORS_AMOUNT).map(color => color.getHslArray()),
    genMethod: genMethods[0] as genMethod,
    displayType: 'hex' as displayType,
}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        generateSeedColor: (state) => {
            state.seedColor = [Math.random() * 360, Math.random() * 100, Math.random() * 100]
        },
        generateColors: (state) => {
            state.colors = new Color(state.seedColor).getColorScheme(COLORS_AMOUNT, state.genMethod)
                .map(color => color.getHslArray())
        },
        setGenMethod: (state, action: { payload: genMethod }) => {
            state.genMethod = action.payload
        },
        setSeedColor: (state, action: { payload: [number, number, number] }) => {
            const seedColor = new Color(action.payload)
            document.body.style.setProperty('--hue', `${seedColor.h}deg`)
            document.body.style.setProperty('--sat', `${Math.round(seedColor.s * 100)}%`)
            document.body.style.setProperty('--light', `${Math.round(seedColor.l * 100)}%`)
            document.body.style.setProperty('--seed-color', seedColor.getCssHsl())
            state.seedColor = action.payload
        },
        setDisplayType: (state, action: { payload: displayType }) => {
            state.displayType = action.payload
        }
    }
})

export const { generateColors, generateSeedColor, setGenMethod, setSeedColor, setDisplayType } = colorSlice.actions