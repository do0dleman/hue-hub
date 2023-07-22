import { useState } from 'react'
import './Header.scss'
import SeedColorModal from './components/SeedColorModal/SeedColorModal'
import Container from '../../components/container/Container'
import Logo from './components/Logo/Logo'

export default function Header() {

    const [showModal, setShowModal] = useState(false)

    function HandleLogoClick() {
        setShowModal((prev) => !prev)
    }
    return (
        <header className='header'>
            <Container>
                <Logo HandleLogoClick={HandleLogoClick} />
                <SeedColorModal showModal={showModal} setShowModal={setShowModal} />
            </Container>
        </header>
    )
}