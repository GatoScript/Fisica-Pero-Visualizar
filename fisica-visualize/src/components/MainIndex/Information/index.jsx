import {InformationContentSection, InformationTitleH3, InformationContentTextsDiv} from "./styled";

const Information = () => {
    return(
        <InformationContentSection>
            <div>
                <InformationTitleH3>
                    Acerca del sitio web
                </InformationTitleH3>
            </div>

            <InformationContentTextsDiv>
                <p>
                    Me gusta la física y este sitio web podría serte útil pero mas enfocado en lo 
                    visual, cada tema, te presentare cada formula y un ejemplo acerca de la formula 
                    de lo que hace un objeto u otro.
                </p>

                <p>
                    Mis objetivos en este proyecto es incrementar mis conocimientos en la física y en 
                    la programación.
                </p>
            </InformationContentTextsDiv>
        </InformationContentSection>
    )
}

export default Information;