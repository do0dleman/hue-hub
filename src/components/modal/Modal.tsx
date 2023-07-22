import Container from '../container/Container'
import './Modal.scss'

interface ModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    showModal: boolean
    setShowModal: Function
}
export default function Modal(props: ModalProps) {

    const { className, children, showModal, setShowModal, ...rest } = props

    function HandleCloseButtonClick() {
        setShowModal(false)
    }
    return (
        <>
            {showModal ? <section className={`${className} -modal`} {...rest}>
                <Container>
                    <button onClick={HandleCloseButtonClick}>
                        <span></span><span></span>
                    </button>
                    {children}
                </Container>
            </section> : <></>}
        </>
    )
}