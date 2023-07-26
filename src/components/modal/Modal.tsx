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
    function HandleModalBgClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        if ((e.target as HTMLElement).className.slice(-6) === '-modal')
            setShowModal(false)
    }
    return (
        <>
            {showModal ? <section
                className={`${className} -modal`}
                {...rest}
                onClick={HandleModalBgClick} >
                <Container>
                    <button onClick={HandleCloseButtonClick}>
                        <span></span><span></span>
                    </button>
                    {children}
                </Container>
            </section > : <></>
            }
        </>
    )
}