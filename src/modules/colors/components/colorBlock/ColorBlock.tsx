import { Color } from 'do0dle-colors'
import './ColorBlock.scss'
import ColorName from './components/ColorName/ColorName';
import hsl from 'do0dle-colors/lib/types/hslType';

interface ColorBlockProps {
    colorArr: hsl
}
export default function ColorBlock(props: ColorBlockProps) {

    const { colorArr } = props
    const color = new Color(colorArr)

    return (
        <div className='color-block' style={{ background: color.getCssHsl() }} >
            <ColorName color={color} />
        </div>
    )
}