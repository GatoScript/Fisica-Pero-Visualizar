import { CardLink, CardArticle, CardTextTypeTitle, CardImage } from "./styled";

const CardLinks = ({ name, image, altImage, link }) => {
    return(
        <CardLink href={link}>
            <CardArticle>
                <section>
                    <CardTextTypeTitle>
                        {name}
                    </CardTextTypeTitle>
                </section>

                <section>
                    <CardImage src={image} alt={altImage}/>
                </section>
            </CardArticle>
        </CardLink>
    )
};

export default CardLinks;