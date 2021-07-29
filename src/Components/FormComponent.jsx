import React, { useContext } from 'react'
import Styled from "styled-components";
import stateContext from './Context/stateContext';
import { Option1, Option2, Option3 } from "./Select";
let Container = Styled.div`
    height: 18vh;
    width: 83vh;
    border-radius: 5px;
    background: white; 
    padding: 10px 20px;
    display: flex;
    gap: 40px;

    .options {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;
        justify-content: center;

    }
    .option {
        display: flex;
    }
    .number {
        padding: 3px;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 20px;
        height: 22px;
        width: 22px;
        display: grid;
        font-size: 17px;
        place-content: center;
    }
`
export default function FormComponent() {
    let contextData = useContext(stateContext);
    console.log(contextData);
    return (
        <Container currentState={contextData.state.currentState}>
            <div className="options">
                <div className="option"><div className="number" style={{ background: contextData.state.currentState >= 1 ? "rgb(37,108,166)" : "rgb(222, 221, 223)", color: contextData.state.currentState >= 1 ? "white" : "black" }} onClick={() => { contextData.state.finishedState >= 1 && contextData.dispatch({ type: "nextState", payload: 1 }) }}>1</div>  Choose Title</div>
                <div className="option"><div className="number" style={{ background: contextData.state.currentState >= 2 ? "rgb(37,108,166)" : "rgb(222, 221, 223)", color: contextData.state.currentState >= 2 ? "white" : "black" }} onClick={() => { contextData.state.finishedState >= 2 && contextData.dispatch({ type: "nextState", payload: 2 }) }}>2</div> Choose Description</div>
                <div className="option"><div className="number" style={{ background: contextData.state.currentState >= 3 ? "rgb(37,108,166)" : "rgb(222, 221, 223)", color: contextData.state.currentState >= 2 ? "white" : "black" }} onClick={() => { contextData.state.finishedState >= 3 && contextData.dispatch({ type: "nextState", payload: 3 }) }}>3</div> Confirm Data</div>
            </div>
            {contextData.state.currentState === 1 ? <Option1 /> : (contextData.state.currentState === 2 ? <Option2 /> : (contextData.state.currentState === 3 ? <Option3 /> : ""))}
        </Container>
    )
}
