import { MouseEventHandler } from 'react'
import './Logo.scss'

interface logoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    HandleLogoClick: MouseEventHandler<HTMLSpanElement>
}
export default function logo(props: logoProps) {

    const { children, HandleLogoClick, ...rest } = props

    return (
        <span
            className='colors-logo'
            onClick={HandleLogoClick}
            {...rest}>
            HueHub
        </span>
    )
}