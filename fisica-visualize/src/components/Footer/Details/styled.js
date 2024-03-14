import styled from "styled-components";

const DetailsContentPrincipalSection = styled.section`
    color: #fff;
    display: flex;
    align-items: center;
    gap: 4em;
    flex-direction: column;
    width: 40%;
`;

const DetailsTitle = styled.p`
    font-size: clamp(1.5em, 5vw, 2em);
    font-weight: 500;
    font-family: 'Montserrat';
`;

const DetailsContentTextDiv = styled.div`
    font-size: clamp(0.8em, 5vw, 1em);
    text-align: center;
    font-weight: 100;
    display: flex;
    flex-direction: column;
    gap: 4em;
    font-family: 'Montserrat';

`;

export {DetailsContentPrincipalSection, DetailsTitle,DetailsContentTextDiv};

