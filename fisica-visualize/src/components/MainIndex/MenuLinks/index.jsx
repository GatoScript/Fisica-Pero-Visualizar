import CardLinks from "./CardLinks";
import {MenuContentCard, MenuSection, TitleMain} from "./styled";

import ImagePresentMRU from "../../../assets/image/img/presentacionMRU.svg"

const MenuLinks = () => {
    return(
        <MenuSection>
            <section>
                <TitleMain>
                    Haga click en las ramas de la fisica disponibles
                </TitleMain>
            </section>

            <MenuContentCard>
                <CardLinks link="/cinematica" name="Cinematica" image={ImagePresentMRU} altImage="Imagen de fisica"/>
            </MenuContentCard>
        </MenuSection>
    )
}

export default MenuLinks;