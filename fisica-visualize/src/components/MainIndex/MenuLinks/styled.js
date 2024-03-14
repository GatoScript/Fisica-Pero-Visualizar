import styled from "styled-components";

const TitleMain = styled.h2`
    font-size: clamp(1.5em, 5vw, 2em);
    font-family: 'Montserrat';
    color: #fff;
    text-align: center;
    font-weight: 100;
`;

const MenuSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
`

const MenuContentCard = styled.section`
    display: flex;
    gap: 2em;
    overflow: overlay;
    width: 100%;
    flex-direction: row;
    padding: 1em 0em;
    background-color: #0a0a0a;

    &::-webkit-scrollbar{
        width: 12px;
    }

    &::-webkit-scrollbar-track{
        background-color: #fff;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #222222;

        &:hover{
            background-color: #2e2e2e; 
        }
    }

`

export {MenuContentCard, MenuSection, TitleMain};