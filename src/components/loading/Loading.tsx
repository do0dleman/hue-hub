import './Loading.scss'

interface LoadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    isDark: boolean
}
export default function Loading(props: LoadingProps) {

    const { className, isDark, ...rest } = props

    const classes = [
        '-loading',
        isDark ? '-loading-dark' : ''
    ].join(' ')

    return (
        <span className={`${className} ${classes}`} {...rest}>
            <span></span><span></span><span></span>
        </span>
    )
}