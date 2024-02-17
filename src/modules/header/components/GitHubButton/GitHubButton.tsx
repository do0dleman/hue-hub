import SvgButton from "../../../../components/svgButton/SvgButton"
import GitHubSVG from "../../../../components/svgs/GitHubSVG"

function GitHubButton() {
    function HandleButtonClick() {
        window.location.href = 'https://github.com/do0dleman/hue-hub'
    }

    return (
        <SvgButton onClick={HandleButtonClick}>
            <GitHubSVG />
        </SvgButton>
    )
}
export default GitHubButton