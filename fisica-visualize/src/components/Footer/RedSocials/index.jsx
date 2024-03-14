import IconGitHub  from "../../../assets/image/icon/github.svg"
import {RSImage,RSContentImg,RSTitlePrincipal,RSContentPrincipal} from "./styled";

const RedSocials = () => {
    return(
        <RSContentPrincipal>
            <div>
                <RSTitlePrincipal>
                    Red Social
                </RSTitlePrincipal>
            </div>

            <RSContentImg>
                <a target="_black" href="https://github.com/GatoScript">
                    <RSImage src={IconGitHub} alt="GitHub"/>
                </a>
            </RSContentImg>
        </RSContentPrincipal>
    )
}

export default RedSocials;