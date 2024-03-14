import styled from "styled-components";

const BlogContentPrincipal = styled.section`
    color: #ffff;
    font-family: 'Montserrat';
    display: flex;
    gap: 2em;
    flex-direction: column;
    margin: 4em 2em;
`;

const BlogText = styled.p`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
`;

export {BlogContentPrincipal, BlogText};