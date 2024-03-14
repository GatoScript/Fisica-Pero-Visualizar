import stytled from 'styled-components';

const FontTitle = stytled.h1`
    font-family: "Montserrat";
    font-size: clamp(3em, 5vw, 5em);
    color: #fff;
`;

const SectionHeader = stytled.section`
    display: flex;
    justify-content: center;
    padding: 2em 1em;
    margin-bottom: 2em;
`;

export { FontTitle, SectionHeader }