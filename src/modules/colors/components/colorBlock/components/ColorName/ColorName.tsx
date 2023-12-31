import CopyToClipboard from 'react-copy-to-clipboard'
import './ColorName.scss'
import { Color } from 'do0dle-colors'
import { useDisplayType } from '../../../../../../hooks/useDisplayType'
import { useGetColorNameByHexQuery } from '../../../../../../store/api/colorNameApi'
import CopyNotification from '../CopyNotification/CopyNotification'
import { useState } from 'react'
import Loading from '../../../../../../components/loading/Loading'

interface ColorNameProps {
    color: Color
}
export default function ColorName(props: ColorNameProps) {

    const { color } = props

    const displayType = useDisplayType()
    const { data: colorLabel, isLoading } = useGetColorNameByHexQuery(color.getCssHex())

    const [doShowNotification, setShowNotification] = useState(false)

    function HandleCopy() {
        setShowNotification(true)
        setTimeout(() => { setShowNotification(false) }, 3000)
    }

    let colorValue
    switch (displayType) {
        case 'hex':
            colorValue = color.getCssHex().toUpperCase()
            break;
        case 'rgb':
            colorValue = color.getCssRgb()
            break;
        case 'hsl':
            colorValue = color.getCssHsl()
            break;
        case 'okLCh':
            colorValue = color.getCssOklch()
            break;
    }

    const isDark = color.L > 0.5 ? true : false
    const classes = [
        'color-name',
        isDark ? 'color-name-dark' : ''
    ].join(' ')

    return (
        <>
            <span className={classes}>
                <CopyToClipboard text={colorValue} onCopy={HandleCopy}>
                    <span className='color-value' onClick={HandleCopy}>{colorValue}</span>
                </CopyToClipboard>
                <p className='color-label'>{isLoading ? <Loading isDark={isDark} /> : colorLabel}</p>
            </span>
            <CopyNotification copiedValue={colorValue} doShowNotification={doShowNotification} />
        </>
    )
}