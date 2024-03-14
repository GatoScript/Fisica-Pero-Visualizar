import {MenuImageGoBackimg, MenuArticle, MenuContentSection, MenuText, MenuTextTitle} from "./styled";
import VisualizesMRU from "./Visualizes/VisualizesMRU";
import GoBackSvg from "../../../assets/image/icon/left.svg"
import Blog from "./Blog";

const Cinematica = () => {


    return(
        <main>
            <MenuArticle>
                <section>
                    <MenuContentSection href="/">
                        <MenuImageGoBackimg src={GoBackSvg} />
                        <MenuText>
                            Volver
                        </MenuText>
                    </MenuContentSection>
                </section>

                <section>
                    <MenuTextTitle>
                        Cinematica
                    </MenuTextTitle>
                </section>
            </MenuArticle>

            <article>
                <VisualizesMRU/>
                <Blog title="Velocidad (v)" information="La velocidadd es el movimienot, el cambio de velocidad de algo o objeto dependiendo del tiempo, en fisica se representaria el analisis dimencional de sus dimenciones. La unidad en el sistema internacional de Unidades seria el metro por segundo (m/s)" />
            </article>
        </main>
    )
};

export default Cinematica;