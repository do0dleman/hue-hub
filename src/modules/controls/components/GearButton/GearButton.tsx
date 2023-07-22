import SvgButton from '../../../../components/svgButton/SvgButton'
import GearSVG from '../../../../components/svgs/GearSVG'
import './GearButton.scss'

interface GearButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLButtonElement> {
    isActive: boolean
}
export default function GearButton(props: GearButtonProps) {

    const { isActive, ...rest } = props

    const classes = [
        '-gear-button',
        isActive ? '-gear-button-active' : ''
    ].join(' ')

    return (
        <SvgButton className={classes} {...rest}>
            <GearSVG />
        </SvgButton>
    )
}