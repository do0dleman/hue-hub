import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ColorInfo } from '../../modules/models/colorName'
import hex from 'do0dle-colors/lib/types/hexType'

export const colorNameApi = createApi({
    reducerPath: 'colorNameApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.color.pizza/v1/' }),
    endpoints: builder => ({
        getColorNameByHex: builder.query<string, hex>({
            query: hex => `/?values=${hex.slice(1, 7)}`,
            transformResponse: (res: ColorInfo) => res.paletteTitle
        })
    })
})

export const { useGetColorNameByHexQuery } = colorNameApi