import Modal from '../../../../components/modal/Modal'
import DisplayTypePicker from './components/DisplayTypePicker/DisplayTypePicker'
import GenMethodPicker from './components/GenMethodPicker/GenMethodPicker'
import './SettingsModal.scss'

interface SettingsModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    showModal: boolean
    setShowModal: Function
}
export default function SettingsModal(props: SettingsModalProps) {

    const { showModal, setShowModal, children, ...rest } = props

    return (
        <Modal
            className='settings-modal'
            setShowModal={setShowModal}
            showModal={showModal}
            {...rest}
        >
            <GenMethodPicker />
            <DisplayTypePicker />
        </Modal>
    )
}