// import * as React from "react"
import styled from "styled-components"

export const PaginationWrapper = styled.div`
    grid-column:2 /span 3;
    grid-row:4;
    padding: 3rem 0;
    display: flex;
    justify-content: center;

    a:nth-child(1) {
        color: ${props =>
         props.isFirst ? "brown" : "chartreuse"};
        pointer-events: ${props => props.isFirst? "auto" : "none"};
        cursor: ${props => props.isFirst?  "pointer": "default"};
    }


    a:nth-child(2) {
        color: ${props =>
         props.isLast ? "brown" : "chartreuse"};
        pointer-events: ${props => props.isLast?  "auto":"none" };
        cursor: ${props => props.isLast? "pointer" : "default"};
    }

    /* @media tablet
    grid-column :2 /span 6;
     */

`

// export const PaginationElement =styled ( props => <Link  {...props}/>)`
//     font-size:0.87rem;
//     line-height:1.125rem;
//     font-weight:400;
//     text-decoration:none;
//     margin:0 2rem;
//     &:hover, &:focus:{
//         text-decoration:underline;
//     }

