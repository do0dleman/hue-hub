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
        hueRef.current!.value = `${Math.round(seedColor.h)}`
        satRef.current!.value = `${Math.round(seedColor.s * 100)}`
        lightRef.current!.value = `${Math.round(seedColor.l * 100)}`
        if (!_.isEqual(seedColor, localSeed)) setLocalSeed(seedColor)
        // setHex(seedColor.getCssHex().toUpperCase())
    }, [seedColor])

    useEffect(() => {
        setHex(localSeed.getCssHex())
    }, [localSeed])


    function HandleHueChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newColor = seedColor.getHslArray()
        newColor[0] = +e.target.value
        setSeedColor(newColor)
    }
    function HandleSatChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newColor = seedColor.getHslArray()
        newColor[1] = +e.target.value
        setSeedColor(newColor)
    }
    function HandleLightChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newColor = seedColor.getHslArray()
        newColor[2] = +e.target.value
        setSeedColor(newColor)
    }
    function HandleHexInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target!.value)
        setHex(e.target!.value)
        let input = e.target!.value
        if (input[0] != '#') input = '#' + input
        setHex(input)
        const newColor = new Color(input)
        if (!isNaN(newColor.h) && !isNaN(newColor.s) && !isNaN(newColor.l) && input.length === 7) setSeedColor(newColor.getHslArray())
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
                <input type="text" value={hex} onChange={HandleHexInputChange} />
            </div>
        </div>
    )
}