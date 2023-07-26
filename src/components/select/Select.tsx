import { ChangeEventHandler } from 'react'
import './Select.scss'

interface SelectProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    value: any
}
export default function Select(props: SelectProps) {

    const { className, children, onChange, value, ...rest } = props

    return (
        <div className={`${className} -select`} {...rest} onChange={() => { }}>
            <select value={value} onChange={onChange}>
                {children}
            </select>
            <span />
        </div>
    )
}