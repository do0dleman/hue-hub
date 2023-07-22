import './Select.scss'

interface SelectProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    value: any
}
export default function Select(props: SelectProps) {

    const { className, children, value, ...rest } = props

    return (
        <div className={`${className} -select`} {...rest}>
            <select value={value} onChange={() => { }}>
                {children}
            </select>
            <span />
        </div>
    )
}