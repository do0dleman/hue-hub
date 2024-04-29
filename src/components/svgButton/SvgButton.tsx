import './SvgButton.scss'

interface SvgButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLButtonElement> {
    className?: string
}
//! SVG has to have viewbox for styles to work
export default function SvgButton(props: SvgButtonProps) {

    const { className, children, ...rest } = props

    return (
        <button className={`${className ?? ''} -svg-button`} {...rest}>
            {children}
        </button>
    )
}