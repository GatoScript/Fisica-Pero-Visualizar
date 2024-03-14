import Details from "./Details"
import RedSocials from "./RedSocials"

import {FooterPrincipal, FooterArticle} from "./styled"

const Footer = () => {
    return(
        <FooterPrincipal>
            <FooterArticle>
                <Details/>
                <RedSocials/>
            </FooterArticle>
        </FooterPrincipal>
    )
}

export default Footer;