import React, { useContext } from 'react'
import Styled from "styled-components";
import stateContext from './Context/stateContext';

let Container = Styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 5px;
    .buttons {
        display: flex;
        gap: 5px;
        justify-content: center;
    }
    .info {
        font-size: 18px;
    }
`
let Button = Styled.button`
        padding: 7px 25px;
        background: rgb(222, 221, 223);
        border: none;
        border-radius: 5px;
        color: black;
        cursor: pointer;
        font-size: 16px;
        &:hover {
            background: rgb(207, 208, 208)
        }
`
export function Option1() {
    let contextData = useContext(stateContext);
    return (
        <Container>
            <div className="info">
                Choose title description
            </div>
            <div className="buttons">
                <Button onClick={() => {
                    contextData.dispatch({ type: "nextState", payload: 2 })
                    contextData.dispatch({ type: "finishedState", payload: 2 })
                }}>Submit Title</Button>
            </div>
        </Container>
    )
}

export function Option2() {
    let contextData = useContext(stateContext);
    return (
        <Container>
            <div className="info">
                Choose description Content
            </div>
            <div className="buttons">
                <Button onClick={() => {
                    contextData.dispatch({ type: "nextState", payload: 1 })
                    contextData.dispatch({ type: "finishedState", payload: 1 })
                }
                }>Back</Button>
                <Button onClick={() => {
                    contextData.dispatch({ type: "nextState", payload: 3 })
                    contextData.dispatch({ type: "finishedState", payload: 3 })
                }
                }>Submit Description</Button>
            </div>
        </Container>
    )
}

export function Option3() {
    let contextData = useContext(stateContext);
    return (
        <Container>
            <div className="info">
                Are you happy now
            </div>
            <div className="buttons">
                <Button onClick={() => {
                    contextData.dispatch({ type: "nextState", payload: 2 })
                    contextData.dispatch({ type: "finishedState", payload: 2 })
                }
                }>No, go back</Button>
                <Button onClick={() => {
                    contextData.dispatch({ type: "nextState", payload: 4 })
                    contextData.dispatch({ type: "finishedState", payload: 4 })
                }
                }>Yes, go ahead</Button>
            </div>
        </Container>
    )
}
