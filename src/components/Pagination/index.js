import React, { useEffect, useState } from 'react'
import { Link, useLocation, } from 'react-router-dom'
import './style.css'

export const Pagination = ({CurrentPage = 1, TotalItems = 0, PageSize = 12, PageLocation = ''}) => {
    
    const TotalPages = Math.ceil(TotalItems / PageSize)
    const { search } = useLocation()
    const [currentPage, setcurrentPage] = useState(1)
    const pages = []
    const onClick = () => {
        
    }
    if(TotalPages > 1){
        const pagesBefore = currentPage - 2 > 1 ? (currentPage < TotalPages - 3 ? currentPage - 2 : TotalPages - 4) : 2
        const pagesAfter = currentPage < 5 ? 5 : currentPage + 2
        for (let i = pagesBefore; i < TotalPages && i <= pagesAfter; i++) {
            pages.push(i)
        }
    }


    useEffect(() => {
        const params = new URLSearchParams(search);
        const p = (Number(params.get('page')) > TotalPages ? 1 : Number(params.get('page'))) || ((CurrentPage > TotalPages)? 1 : CurrentPage)
        setcurrentPage(p)
    }, [search, TotalPages, CurrentPage])
    if(TotalItems <= 0){
        return (<div className="pagination"></div>)
    }
    else{
        return(
            <div className="pagination">
                <Link onClick={onClick} to={`/${PageLocation}?page=${1}`} ><i className='bx bx-first-page pagination__icon'></i></Link>
                <Link onClick={onClick} to={`/${PageLocation}?page=${currentPage - 1 > 1 ? currentPage - 1: 1}`}><i className='bx bx-chevron-left pagination__icon'></i></Link>
                <Link onClick={onClick} className={`pagination__number${currentPage === 1 ? ' active': ''}`} to={`/${PageLocation}?page=${1}`}>{1}</Link>
                {currentPage > 4 && <span>...</span>}
                {
                    pages.map((page,index)=>
                        <Link onClick={onClick} key={index} className={`pagination__number${currentPage === page ? ' active': ''}`} to={`/${PageLocation}?page=${page}`}>{page}</Link>
                    )
                }
                {currentPage < TotalPages - 3 && <span>...</span>}
                {
                    TotalPages !== 1
                    &&
                    <Link onClick={onClick} className={`pagination__number${currentPage === TotalPages ? ' active': ''}`} to={`/${PageLocation}?page=${TotalPages}`}>{TotalPages}</Link>
                }
                <Link onClick={onClick} to={`/${PageLocation}?page=${currentPage + 1 < TotalPages ? currentPage + 1:TotalPages}`}><i className='bx bx-chevron-right pagination__icon'></i></Link>
                <Link onClick={onClick} to={`/${PageLocation}?page=${TotalPages}`}><i className='bx bx-last-page pagination__icon'></i></Link>
            </div>
        )
        
    }
}
