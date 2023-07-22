// import './DisplayTypePicker.scss'

import Select from "../../../../../../components/select/Select"
import { useDisplayType } from "../../../../../../hooks/useDisplayType"
import { useSetDisplayType } from "../../../../../../hooks/useSetDisplayType"
import { displayType } from "../../../../../../store/color/types/displayType"

interface DisplayTypePickerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {

}
export default function DisplayTypePicker(props: DisplayTypePickerProps) {

    const { className, children, ...rest } = props

    const setDisplayType = useSetDisplayType()
    function HandleSelectOptionClick(e: React.MouseEvent<HTMLOptionElement, MouseEvent>) {
        setDisplayType((e.target as HTMLOptionElement).value as displayType)
    }

    const displayType = useDisplayType()

    const displayTypes: displayType[] = ["hex", 'rgb', 'hsl']

    return (
        <div className='display-type' {...rest}>
            <h3>Display Type</h3>

            <Select className="gen-methods__select" value={displayType}>
                {displayTypes.map(type =>
                    <option
                        value={type}
                        key={type}
                        onClick={HandleSelectOptionClick}
                    >{type}</option>)}
            </Select>
        </div>
    )
}