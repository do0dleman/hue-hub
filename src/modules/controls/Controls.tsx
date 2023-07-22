import './Controls.scss'
import { useGenerateColors } from '../../hooks/useGenerateColors'
import Container from '../../components/container/Container'
import GenerateButton from './components/GenerateButton/GenerateButton'
import GearButton from './components/GearButton/GearButton'
import { useState } from 'react'
import SettingsModal from './components/SettingsModal/SettingsModal'

export default function Controls() {

    const generateColors = useGenerateColors()
    function HandleGenButtonClick() {
        generateColors()
    }

    const [showSettingsModal, setShowSettingsModal] = useState(false)
    function HandleGearButtonClick() {
        setShowSettingsModal(true)
    }
    return (
        <section className='controls'>
            <Container>
                <GearButton onClick={HandleGearButtonClick} isActive={showSettingsModal} />
                <GenerateButton onClick={HandleGenButtonClick} />
            </Container>
            <SettingsModal showModal={showSettingsModal} setShowModal={setShowSettingsModal} />
        </section>
    )
}