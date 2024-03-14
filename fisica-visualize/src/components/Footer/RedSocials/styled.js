import styled from "styled-components";

const RSContentPrincipal = styled.section`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`;

const RSTitlePrincipal = styled.p`
    font-size: clamp(1.5em, 5vw, 2em);
    font-weight: 500;
    font-family: 'Montserrat';
`;

const RSContentImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`;

const RSImage = styled.img`
    width: 4em;
    transform: translate(0px, -0px) rotate3d(1, 1, 1, 305deg);
    box-shadow: 0 0 0px 0px #0400ff;
    border-style: solid;
    border-color: #23223a;
    border-width: 0.2em;
    border-radius: 1.5em;
    background-color: #fff;

    transition-property: transform, box-shadow, border-color;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
    
    &:hover{
        transform: translate(0px, -10px) rotate3d(1, 1, 1, 305deg);
        box-shadow: 0 0 20px 0px #0400ff;
        border-color: #0400ff;
    }
`;

export {RSImage,RSContentImg,RSTitlePrincipal,RSContentPrincipal};