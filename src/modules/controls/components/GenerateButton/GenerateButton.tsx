import './GenerateButton.scss'

interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLButtonElement> {
    className?: string
}
export default function GenerateButton(props: ButtonProps) {

    const { className, children, ...rest } = props

    return (
        <button className={`${className} -generate-button`} {...rest}>
            <span>
                Generate
            </span>
        </button>
    )
}