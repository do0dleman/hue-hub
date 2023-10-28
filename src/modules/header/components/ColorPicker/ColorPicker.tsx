import React, { useEffect, useRef, useState } from 'react'
import './ColorPicker.scss'
import { Color } from 'do0dle-colors'
import { useSeedColor } from '../../../../hooks/useSeedColor'
import { useSetSeedColor } from '../../../../hooks/useSetSeedColor'
import _ from 'lodash'

interface ColorPickerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
}
export default function ColorPicker(props: ColorPickerProps) {

    const { className, ...rest } = props

    const seedColor = useSeedColor()
    const setSeedColor = useSetSeedColor()

    const hueRef = useRef<HTMLInputElement>(null)
    const satRef = useRef<HTMLInputElement>(null)
    const lightRef = useRef<HTMLInputElement>(null)

    const [hex, setHex] = useState<string>('d')
    const [localSeed, setLocalSeed] = useState(new Color(seedColor))

    useEffect(() => {
        const hsl = seedColor.getHslArray()
        hueRef.current!.value = `${Math.round(hsl[0])}`
        satRef.current!.value = `${Math.round(hsl[1])}`
        lightRef.current!.value = `${Math.round(hsl[2])}`
        if (!_.isEqual(seedColor, localSeed)) setLocalSeed(seedColor)
        // setHex(seedColor.getCssHex().toUpperCase())
    }, [seedColor])

    useEffect(() => {
        setHex(localSeed.getCssHex())
    }, [localSeed])


    function HandleHueChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newColor = seedColor.getHslArray()
        newColor[0] = +e.target.value
        setSeedColor(new Color(newColor, 'hsl').getOkLChArray())
    }
    function HandleSatChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newColor = seedColor.getHslArray()
        newColor[1] = +e.target.value
        setSeedColor(new Color(newColor, 'hsl').getOkLChArray())
    }
    function HandleLightChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newColor = seedColor.getHslArray()
        newColor[2] = +e.target.value
        setSeedColor(new Color(newColor, 'hsl').getOkLChArray())
    }
    function HandleHexInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setHex(e.target!.value)
        let input = e.target!.value
        if (input[0] != '#') input = '#' + input
        setHex(input)
        const newHsl = new Color(input).getOkLChArray()
        if (!isNaN(newHsl[0]) && !isNaN(newHsl[1]) && !isNaN(newHsl[2]) && input.length === 7)
            setSeedColor(newHsl)
    }
    return (
        <div className='-color-picker' {...rest}>
            <div className="sliders">
                <div className="inputs">
                    <input onChange={HandleHueChange} className='range' type="range" ref={hueRef} min={0} max={360} />
                    <input onChange={HandleSatChange} className='range' type="range" ref={satRef} min={0} max={100} />
                    <input onChange={HandleLightChange} className='range' type="range" ref={lightRef} min={0} max={100} />
                </div>
                <div className="color-preview"></div>
            </div>
            <div className="text">
                <input type="text" value={hex.toUpperCase()} onChange={HandleHexInputChange} />
            </div>
        </div>
    )
}