import { genMethod, genMethods } from 'do0dle-colors'
import './GenMethodPicker.scss'
import Select from '../../../../../../components/select/Select'
import { useSetGenMethod } from '../../../../../../hooks/useSetGenMethod'
import { useGenMethod } from '../../../../../../hooks/useGenMethod'

interface GenMethodPickerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string

}
export default function GenMethodPicker(props: GenMethodPickerProps) {

    const { ...rest } = props

    const setGenMethod = useSetGenMethod()
    function HandleSelectOptionClick(e: React.MouseEvent<HTMLOptionElement, MouseEvent>) {
        setGenMethod((e.target as HTMLOptionElement).value as genMethod)
    }
    function HandleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setGenMethod((e.target as HTMLSelectElement).value as genMethod)
    }

    const genMethod = useGenMethod()

    return (
        <div className="gen-methods" {...rest}>
            <h3 className="gen-methods__title">
                Generation Method
            </h3>
            <Select
                className="gen-methods__select"
                value={genMethod}
                onChange={HandleSelectChange}
            >
                {genMethods.map(method =>
                    <option
                        value={method}
                        key={method}
                        onClick={HandleSelectOptionClick}
                    >{method}</option>)}
            </Select>
        </div>
    )
}