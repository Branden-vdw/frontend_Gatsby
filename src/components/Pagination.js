import * as React from "react"
import { PaginationWrapper } from "../elements/PaginationElements"
import { Link } from "gatsby"


export const Pagination =({isFirst, isLast, prevPage, nextPage}) => {
    return(
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <Link className="pagination-link-elements" to ={prevPage}>Previous page</Link>
            <Link className="pagination-link-elements" to={nextPage}>Next page</Link>
        </PaginationWrapper>
    )

}

