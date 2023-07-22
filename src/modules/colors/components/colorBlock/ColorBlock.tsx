import { Color } from 'do0dle-colors'
import './ColorBlock.scss'
import ColorName from './components/ColorName/ColorName';

interface ColorBlockProps {
    color: Color
}
export default function ColorBlock(props: ColorBlockProps) {

    const { color } = props

    return (
        <div className='color-block' style={{ background: color.getCssHsl() }} >
            <ColorName color={color} />
        </div>
    )
}