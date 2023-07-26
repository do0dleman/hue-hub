import './Loading.scss'

interface LoadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
}
export default function Loading(props: LoadingProps) {

    const { className, ...rest } = props

    return (
        <span className={`${className} -loading`} {...rest}>
            <span></span><span></span><span></span>
        </span>
    )
}