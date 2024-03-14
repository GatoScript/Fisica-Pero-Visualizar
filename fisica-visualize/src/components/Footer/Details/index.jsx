import {DetailsContentPrincipalSection, DetailsTitle,DetailsContentTextDiv} from "./styled";

const Details = () => {
    return(
        <DetailsContentPrincipalSection>
            <div>
                <DetailsTitle>
                    Detalles
                </DetailsTitle>
            </div>

            <DetailsContentTextDiv>
                <p>
                    Aprenderas fisica visualmente sobre las formulas, 
                    de como se comportan, sus acciones, como afectan
                </p>

                <p>
                    Todos los derechos estan reservados
                </p>
            </DetailsContentTextDiv>
        </DetailsContentPrincipalSection>
    )
}

export default Details;