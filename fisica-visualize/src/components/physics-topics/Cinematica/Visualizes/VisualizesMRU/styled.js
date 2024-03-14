import styled from "styled-components";

const CanvasStyled = styled.canvas`
    background-color: #181818;
    border-radius: 0.5em;
`;

const VisualizeContentPrincipalSection = styled.section`
    background-color: #0B0B0B;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1em 2em;
    flex-wrap: wrap;
    gap: 2em;
`;

const VisualizerContentInformationSection = styled.section`
    display: flex;
    gap: 4em;
    flex-direction: row;
`;

const VisualizeContentPropertyDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5em;
`;

const VisualizeCountContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const VisualizeCountSpan = styled.span`
    font-size: 2em;
    color: #fff;
    font-family: 'montserrat';
    text-align: center;
    text-shadow: 0px 0px 20px #0008ff;
    color: #0008ff;
`;

const VisualizeLabel = styled.p`
    color: #fff;
    font-size: clamp(2em, 5vw, 2.5em);
    font-family: 'Montserrat';
    text-align: center;
    font-weight: 200;
`;

const VisualizeContentPropertyControlDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2em;
`;

const VisualizeButton = styled.button`
    font-size: 4em;
    background-color: #0000;
    border-style: none;
    font-weight: 300;
    font-family: 'Montserrat';
    color: #fff;
    cursor: pointer;
    transition: text-shadow 0.2s;

    &:hover{
        text-shadow: 0px 0px 20px;
    }
`;

const VisualizeContentFormula = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2em;
`;

const VisualizeTitleFormulaP = styled.p`
    color: #fff;
    font-size: clamp(2em, 5vw, 2.5em);
    font-family: 'Montserrat';
    font-weight: 200;
`;

const VisualizeResultFormulaP = styled.p`
    color: #fff;
    font-size: clamp(3em, 5vw, 3.5em);
    font-family: 'Montserrat';
`;

const VisualizeContentCanvasAndResult = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;

const VisualizeTextResultP = styled.p`
    color: #ffff;
    font-family: 'Montserrat';
`;

const VisualizeTitleP = styled.p`
    font-size: clamp(2em, 5vw, 2.5em);
    font-family: "Montserrat";
    color: #fff;
    text-align: center;
    font-weight: 200;
`;

export {VisualizeResultFormulaP, VisualizeTitleP, VisualizeTextResultP, VisualizeContentCanvasAndResult, VisualizeButton, VisualizeContentPropertyControlDiv, VisualizeCountSpan, VisualizeCountContentDiv, VisualizeTitleFormulaP, VisualizeContentFormula, VisualizeLabel, VisualizeContentPropertyDiv, VisualizerContentInformationSection, VisualizeContentPrincipalSection, CanvasStyled}
