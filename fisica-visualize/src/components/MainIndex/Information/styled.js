import styled from "styled-components";

const InformationContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    margin-top: 5em;
`;

const InformationTitleH3 = styled.h3`
    color: #fff;
    font-family: 'Montserrat';
    font-size: clamp(2.5em, 5vw, 3em);
    font-weight: 300;
`;

const InformationContentTextsDiv = styled.div`
    color: #ffff;
    font-size: clamp(1em, 5vw, 1.5em);
    font-family: 'Montserrat';
    font-weight: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1em;
    width: 80%;
`;

export {InformationContentSection, InformationTitleH3, InformationContentTextsDiv}