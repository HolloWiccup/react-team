import React, { useState } from 'react'
import Pagination from '../pagination'
import { MainProps, PaginationObject } from '../../types/types';
import arr from '../../numbersArray';

export default function MainPage({itemsPerPage} : MainProps) {
    const [paginData, setPaginData] = useState<PaginationObject>({
        total: Math.ceil(arr.length / itemsPerPage), 
        current: 1,
        itemsPerPage: itemsPerPage
    })

    const firstIndex = (paginData.current - 1) * paginData.itemsPerPage;
    const lastIndex = firstIndex + (itemsPerPage) 
    const sliced = arr.slice(firstIndex, lastIndex)

    function forward() {
        setPaginData(prevSate=> ({
            ...prevSate,
            current: prevSate.current < prevSate.total ? prevSate.current + 1 : prevSate.total
        }))
        
    }

    function back() {
        setPaginData(prevSate=> ({
            ...prevSate,
            current: prevSate.current <= 1 ? 1 : prevSate.current - 1
        }))
    }

    const mapped = sliced.map(item=> (<p key={item}>{item}</p>))
    return (
        <div>
            {mapped}
            <Pagination currentPage={paginData.current} totalPage={paginData.total} forward={forward} back={back}/>
        </div>
    )
}
