import { BlogContentPrincipal, BlogText } from "./styled";

const Blog = ({title, information}) => {
    return(
        <BlogContentPrincipal>
            <div>
                <BlogText size="clamp(2em, 5vw, 2.5em)" weight="600">
                    {title}
                </BlogText>
            </div>

            <div>
                <BlogText size="2em" weight="200">
                    {information}
                </BlogText>
            </div>
        </BlogContentPrincipal>
    )
};

export default Blog;