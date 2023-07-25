import CopyToClipboard from 'react-copy-to-clipboard'
import './ColorName.scss'
import { Color } from 'do0dle-colors'
import { useDisplayType } from '../../../../../../hooks/useDisplayType'
import { useGetColorNameByHexQuery } from '../../../../../../store/api/colorNameApi'

interface ColorNameProps {
    color: Color
}
export default function ColorName(props: ColorNameProps) {

    const { color } = props

    const displayType = useDisplayType()
    const { data: colorLabel, error, isLoading } = useGetColorNameByHexQuery(color.getCssHex())

    let colorName
    switch (displayType) {
        case 'hex':
            colorName = color.getCssHex().toUpperCase()
            break;
        case 'rgb':
            colorName = color.getCssRgb()
            break;
        case 'hsl':
            colorName = color.getCssHsl()
            break;
    }

    const isDark = color.l > 0.5 ? true : false
    const classes = [
        'color-name',
        isDark ? 'color-name-dark' : ''
    ].join(' ')

    return (
        <CopyToClipboard text={colorName} >
            <span className={classes}>
                <span className='color-value'>{colorName}</span>
                {isLoading ? <></> : <p className='color-label'>{colorLabel}</p>}
            </span>
        </CopyToClipboard>
    )
}