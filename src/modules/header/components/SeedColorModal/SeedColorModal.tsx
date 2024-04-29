import Modal from '../../../../components/modal/Modal'
import ColorPicker from '../ColorPicker/ColorPicker'
import './SeedColorModal.scss'

interface SeedColorModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    showModal: boolean
    setShowModal: (showModela: boolean) => void
}
export default function SeedColorModal(props: SeedColorModalProps) {

    const { setShowModal, showModal } = props

    return (
        <Modal className='seed-color-modal' showModal={showModal} setShowModal={setShowModal}>
            <h3>SeedColor</h3>
            <ColorPicker />
        </Modal>
    )
}