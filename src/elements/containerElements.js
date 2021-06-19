import styled from "styled-components";

export const Containerwrapper = styled.div `
    height :100%;
    display : grid ;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: 7.8 rem 20 rem 5rem auto;
    gap:0 2rem;

  
`

// @media tablets

// grid-template-colums : 2rem repeat(6, 1fr) 2rem;
// grid-gap:0 1rem;

//@media mobile
//grid-template-columns:1rem repeat(6, 1fr) 1rem;