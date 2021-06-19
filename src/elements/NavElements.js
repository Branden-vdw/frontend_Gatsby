import styled from "styled-components"

export const NavWrapper= styled.nav`
    grid-column: 2 / span 3;
    grid-row: 1;
    margin-top: 0;
 
    @media screen and (max-width:520px) and (min-width:320px) {
        grid-column: 1/ span 2;

    }  
    
    @media screen and (max-width:768px) and (min-width:520px){
        grid-column: 1/ span 4;

    }
    `

