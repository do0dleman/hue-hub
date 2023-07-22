import './Container.scss'

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
}
export default function Container(props: ContainerProps) {

    const { className, children, ...rest } = props

    return (
        <div className={`${className} -container`} {...rest}>
            {children}
        </div>
    )

}