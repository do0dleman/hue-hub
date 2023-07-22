import ColorBlock from './components/colorBlock/ColorBlock'
import { useColors } from '../../hooks/useColors'
import './Colors.scss'

interface ColorsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
}
export default function Colors(props: ColorsProps) {

    const { ...rest } = props

    const colors = useColors()

    return (
        <main className="color-container" {...rest}>
            {colors.map(color => <ColorBlock color={color} key={Math.random()} />)}
        </main>
    )
}