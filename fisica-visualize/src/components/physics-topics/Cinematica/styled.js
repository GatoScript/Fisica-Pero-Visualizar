import styled from "styled-components";

const CanvasStyled = styled.canvas`
    background-color: #181818;
    border-radius: 0.5em;
`;

const MenuArticle = styled.article`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 2em;
    margin-bottom: 5em;
`;

const MenuContentSection = styled.a`
    display: flex;
    gap: 2em;
    text-decoration: none;
`;

const MenuText = styled.p`
    font-size: clamp(1em, 5vw, 1.5em);
    font-family: 'Montserrat';
    color: #000;
`;

const MenuTextTitle = styled.h2`
    font-size: clamp(1em, 5vw, 1.5em);
    font-family: 'Montserrat';
    cursor: default;
    transition: transform 0.5s;

    &:hover{
        transform: translate(0px, -5px);
    }
`;

const MenuImageGoBackimg = styled.img`
    width: 2em;
`;

export {MenuImageGoBackimg, MenuArticle, MenuContentSection, MenuText, MenuTextTitle};