import SvgButton from "../../../../components/svgButton/SvgButton"
import GitHubSVG from "../../../../components/svgs/GitHubSVG"
import "./GithubButton.scss"

function GitHubButton() {

    return (
        <a href="https://github.com/do0dleman/hue-hub" target="_blank" 
        className="-github-button"
        >
            <SvgButton>
                <GitHubSVG />
            </SvgButton>
        </a>
    )
}
export default GitHubButton