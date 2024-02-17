import './Controls.scss'
import { useGenerateColors } from '../../hooks/useGenerateColors'
import Container from '../../components/container/Container'
import GenerateButton from './components/GenerateButton/GenerateButton'
import GearButton from './components/GearButton/GearButton'
import { useState } from 'react'
import SettingsModal from './components/SettingsModal/SettingsModal'
import { useIsSeedColorRandom } from '../../hooks/useIsSeedColorRandom copy'
import { useSetSeedColor } from '../../hooks/useSetSeedColor'
import { Color } from 'do0dle-colors'

export default function Controls() {

    const generateColors = useGenerateColors()
    const isSeedColorRandom = useIsSeedColorRandom()
    const setSeedColor = useSetSeedColor()

    function HandleGenButtonClick() {
        if (isSeedColorRandom) {
            setSeedColor(new Color([Math.random() * 360,
            Math.random() * 100, Math.random() * 100], 'hsl').getOkLChArray())
        }
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