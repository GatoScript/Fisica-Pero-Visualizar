import styled from "styled-components";

const CardArticle = styled.article`
    display: flex;
    gap: 1em;
    flex-direction: column;
    align-items: center;
`;

const CardTextTypeTitle = styled.p`
    font-size: 1.5em;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #fff;
`;

const CardImage = styled.img`
    width: 20em;
    height: 11em;
    border-radius: 2em;

    transition: border-radius 0.5s;

    &:hover{
        border-radius: 1em;
    }
`;

const CardLink = styled.a`
    text-decoration: none;

    background-color: #0E0E0E;
    padding: 1em 3em;
    border-radius: 0.5em;
    margin-left: 1em;
    margin-right: 1em;
    
    transition: background-color 0.2s;

    &:hover{
        background-color: #2a2a2a;
    }
`

export {CardImage, CardTextTypeTitle, CardArticle, CardLink}