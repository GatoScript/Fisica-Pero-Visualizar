import { useEffect, useRef, useState } from "react"
import {VisualizeTitleP, VisualizeTextResultP, VisualizeContentCanvasAndResult, VisualizeButton, VisualizeContentPropertyControlDiv, VisualizeCountSpan, VisualizeCountContentDiv, VisualizeResultFormulaP, VisualizeTitleFormulaP, VisualizeContentFormula, VisualizeLabel, VisualizeContentPropertyDiv, VisualizerContentInformationSection, VisualizeContentPrincipalSection, CanvasStyled} from "./styled"

const VisualizesMRU = () => {
    const [disabledActive, setDisabledActive] = useState({
        distance: {positive: false, negative: false},
        time: {positive: false, negative: false}
    })
    const [distance, setDistance] = useState(200)
    const [time, setTime] = useState(1)
    const canvasVisualize1 = useRef()

    useEffect(() => {
        const canvas = canvasVisualize1.current;
        const ctx = canvas.getContext("2d");

        let x = 10;
        let y = 180;

        let vx = time;
        let vy = 2;

        const drawOne = () => {

            ctx.clearRect(0,0,canvas.width, canvas.height)

            ctx.beginPath()

            ctx.fillStyle = "rgb(255, 255, 255)";
            ctx.fillRect(x, y, 20, 20);

            ctx.closePath();

            if(x > distance){
                x = 10
            }

            x += vx;

           window.requestAnimationFrame(drawOne)
        }

        drawOne()

        
    }, [distance, time])

    const handleCountSum = (x) => {

        if(x == 'positive'){
            if(distance < 280){
                setDistance((x) => x + 10)
            }else if(distance > 200 && disabledActive.distance == false){
                setDisabledActive((x) => x.distance.positive = true)
                setDisabledActive((x) => x.distance.negative = false)
                
            }else{
                console.log("Not")
            }
        }else if(x == "negative"){
            if(distance > 10){
                setDistance((x) => x - 10)
                
            }else if(distance < 10 && disabledActive.distance == false){
                setDisabledActive((x) => x.distance.negative = true)
                setDisabledActive((x) => x.distance.positive = false)
            }else{
                console.log("Not")
            }
        }
    };

    const handleCountRest = (x) => {
        if(x == 'positive'){
            if(time < 5){
                setTime((x) => x + 1)
            }else if(distance > 200 && disabledActive.time == false){
                setDisabledActive((x) => x.time.positive = true)
                setDisabledActive((x) => x.time.negative = false)
            }else{
                console.log("Not")
            }
        }else if(x == "negative"){
            if(time > 1){
                setTime((x) => x - 1)
                
            }else if(distance < 10 && disabledActive.time == false){
                setDisabledActive((x) => x.time.negative = true)
                setDisabledActive((x) => x.time.positive = false)
            }else{
                console.log("Not")
            }
        }
    }



    return(
        <VisualizeContentPrincipalSection>
            <VisualizeContentCanvasAndResult>
                <VisualizeTitleP>
                    MRU
                </VisualizeTitleP>

                <CanvasStyled ref={canvasVisualize1}  weight="400px" height="200px"/>

                <VisualizeTextResultP>
                    V = {distance / time}
                </VisualizeTextResultP>
                    </VisualizeContentCanvasAndResult>

            <VisualizerContentInformationSection>
                <VisualizeContentPropertyControlDiv>
                        <VisualizeContentPropertyDiv>            
                            <VisualizeLabel>
                                Distancia
                            </VisualizeLabel>

                            <VisualizeCountContentDiv>
                                <VisualizeButton disabled={disabledActive.distance.positive} onClick={() => handleCountSum("positive")}>
                                    +
                                </VisualizeButton>
                                <VisualizeCountSpan>
                                    {distance} m/s
                                </VisualizeCountSpan>
                                <VisualizeButton disabled={disabledActive.distance.negative} onClick={() => handleCountSum("negative")}>
                                    -
                                </VisualizeButton>
                                </VisualizeCountContentDiv>
                        </VisualizeContentPropertyDiv>

                        <VisualizeContentPropertyDiv>            
                            <VisualizeLabel>
                                    Tiempo
                            </VisualizeLabel>

                            <VisualizeCountContentDiv>
                                <VisualizeButton disabled={disabledActive.time.positive} onClick={() => handleCountRest("positive")}>
                                        +
                                </VisualizeButton>
                                <VisualizeCountSpan>
                                        {time}s
                                </VisualizeCountSpan>
                                <VisualizeButton disabled={disabledActive.time.negative} onClick={() => handleCountRest("negative")}>
                                    -
                                </VisualizeButton>
                            </VisualizeCountContentDiv>
                        </VisualizeContentPropertyDiv>
                    </VisualizeContentPropertyControlDiv>

                <VisualizeContentFormula>
                    <div>
                        <VisualizeTitleFormulaP>
                            Formula
                        </VisualizeTitleFormulaP>
                    </div>

                    <div>
                        <VisualizeResultFormulaP>
                             v = d/t
                        </VisualizeResultFormulaP>
                    </div>
                </VisualizeContentFormula>
            </VisualizerContentInformationSection>
        </VisualizeContentPrincipalSection>
    )
}

export default VisualizesMRU;