
import styled from "styled-components"

export const PaginationWrapper = styled.div`
    grid-column:1 /span 3;
    grid-row:3;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    

    @media screen and (max-width:520px) and (min-width:320px) {
        grid-column: 1;

    }  
    
    @media screen and (max-width:768px) and (min-width:520px){
        grid-column: 1/ span 2;

    }
`
