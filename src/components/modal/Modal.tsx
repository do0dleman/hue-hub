import { useState } from 'react'
import Container from '../container/Container'
import './Modal.scss'

interface ModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDivElement> {
    className?: string
    showModal: boolean
    setShowModal: (showModal: boolean) => void
}
export default function Modal(props: ModalProps) {

    const { className, children, showModal, setShowModal, ...rest } = props
    const [keepModal, setKeepModal] = useState(false)

    function HandleCloseButtonClick() {
        setShowModal(false)
        setKeepModal(true)
        setTimeout(() => setKeepModal(false), 300)
    }
    function HandleModalBgClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        if ((e.target as HTMLElement).className.slice(-14) === '-modal-wrapper')
            HandleCloseButtonClick()
    }
    return (
        <>
            {(showModal || keepModal) ? <section
                className={`${className ?? ''} 
                    ${showModal ? '-modal-active' : ''}
                    -modal`}
                {...rest}
                onClick={HandleModalBgClick} 
                >
                <div className='-modal-wrapper'>
                    <Container>
                        <button onClick={HandleCloseButtonClick}>
                            <span></span><span></span>
                        </button>
                        {children}
                    </Container>
                </div>
            </section >: <></>}
        </>
    )
}