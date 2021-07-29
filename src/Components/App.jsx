import React from 'react'
import styled from 'styled-components';
import { StateContextProvider } from "./Context/stateContext"
import FormComponent from './FormComponent';

let Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgb(118,49,152);
    display: grid;
    place-content: center;
`

export default function App() {
    return (
        <StateContextProvider>
            <Container>
                <FormComponent />
            </Container>
        </StateContextProvider>
    )
}
