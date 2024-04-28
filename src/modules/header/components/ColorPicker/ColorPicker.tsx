import React, { useEffect, useState } from 'react'
import './ColorPicker.scss'
import { Color, ConversionFunctions } from 'do0dle-colors'
import { useSeedColor } from '../../../../hooks/useSeedColor'
import { useSetSeedColor } from '../../../../hooks/useSetSeedColor'
import { useSetSeedColorRandom } from '../../../../hooks/useSetSeedColorRandom'
import { useIsSeedColorRandom } from '../../../../hooks/useIsSeedColorRandom copy'


export default function ColorPicker(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement>) {

    const { ...rest } = props

    const seedColor = useSeedColor()
    const seedHsl = seedColor.getHslArray()
    const setSeedColor = useSetSeedColor()
    const isSeedColorRandom = useIsSeedColorRandom()
    const setSeedColorRandom = useSetSeedColorRandom()

    const [hex, setHex] = useState<string>('d')

    const [hue, setHue] = useState(seedHsl[0])
    const [saturation, setSaturation] = useState(seedHsl[1])
    const [lightness, setLightness] = useState(seedHsl[2])

    useEffect(() => {
        const { hslToRgb, rgbToHex } = ConversionFunctions
        setHex(rgbToHex(hslToRgb([hue, saturation / 100, lightness / 100])))
    }, [hue, saturation, lightness])


    function HandleHueChange(e: React.ChangeEvent<HTMLInputElement>) {
        setHue(+e.target.value)
        setSeedColor(new Color([+e.target.value, saturation, lightness], 'hsl', false).getOkLChArray())
    }
    function HandleSatChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSaturation(+e.target.value)
        setSeedColor(new Color([hue, +e.target.value, lightness], 'hsl', false).getOkLChArray())
    }
    function HandleLightChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLightness(+e.target.value)
        setSeedColor(new Color([hue, saturation, +e.target.value], 'hsl', false).getOkLChArray())
    }
    function HandleHexInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setHex(e.target.value)
        let input = e.target.value
        if (input[0] != '#') input = '#' + input
        setHex(input)

        const newColor = new Color(input)
        const newHsl = newColor.getHslArray()
        const newOkLCh = newColor.getOkLChArray()
        if (!isNaN(newOkLCh[0]) && !isNaN(newOkLCh[1]) && !isNaN(newOkLCh[2]) && input.length === 7) {
            setHue(newHsl[0])
            setSaturation(newHsl[1])
            setLightness(newHsl[2])

            setSeedColor(newOkLCh)
        }
    }
    function HandleRadomCheckboxChange() {
        setSeedColorRandom(!isSeedColorRandom)
    }
    return (
        <div className='-color-picker' {...rest}>
            <div className="sliders">
                <div className="inputs">
                    <input onChange={HandleHueChange} value={hue} className='range' type="range" min={0} max={360} />
                    <input onChange={HandleSatChange} value={saturation} className='range' type="range" min={0} max={100} />
                    <input onChange={HandleLightChange} value={lightness} className='range' type="range" min={0} max={100} />
                </div>
                <div className="color-preview"></div>
            </div>
            <div className="text">
                <input type="text" className="hex-input"
                    value={hex.toUpperCase()} onChange={HandleHexInputChange} />
                <span className='random-checkbox-wrapper'>
                    <input type="checkbox" className="random-checkbox"
                        id='random-checkbox' checked={isSeedColorRandom} onChange={HandleRadomCheckboxChange} />
                    <label htmlFor="random-checkbox">random</label>
                </span>
            </div>
        </div>
    )
}