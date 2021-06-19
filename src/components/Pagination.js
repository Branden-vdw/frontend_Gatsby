import * as React from "react"
import { PaginationWrapper } from "../elements/PaginationElements"
import { Link } from "gatsby"


export const Pagination =({countPages, currentPage, root}) => {
    const countSides = 2
    const Port =range(countSides, currentPage-countSides).filter(val => val > 0)
    const starBoard = range(countSides, currentPage + 1).filter(val => val < countPages - 1)
    const Home =`${root}`

    function range (size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt)
    }

    if(countPages === 1) {
        return null
    }




    return(
        <PaginationWrapper >
            {currentPage !==0 && <Link style={{ textDecoration:'none',}} to ={Home}> <div className="pagination-link-elements">1</div></Link>}
            {Port.map(page => <Link style={{ textDecoration:'none',}} to = {`${Home}${page}`}><div className="pagination-link-elements">{page + 1}</div></Link>)}
            <Link style={{ textDecoration:'none',}} to ={`${Home}${currentPage}`}><div className="current-page">{currentPage+1}</div></Link>
            {starBoard.map(page => <Link style={{ textDecoration:'none',}} to = {`${Home}${page}`}><div className= "pagination-link-elements">{page + 1}</div></Link>)}
            {currentPage !== countPages -1 && <Link  style={{ textDecoration:'none',}} to ={`${Home}${countPages - 1}`}><div className="pagination-link-elements">{countPages}</div></Link>}
        </PaginationWrapper>
    )

}

