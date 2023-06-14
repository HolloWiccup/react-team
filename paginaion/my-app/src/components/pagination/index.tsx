import React from 'react'
import './style.css'
import { PaginationProps } from '../../types/types'

export default function Pagination({currentPage, totalPage, forward, back}: PaginationProps) {
    const backClass = currentPage === 1 ? 'btn btn-notactive' : 'btn'
    const forwardClass = currentPage === totalPage ? 'btn btn-notactive' : 'btn'

    return (
        <div className='pagin-block'>
            <div className='pagin-btns'>
                <button className={backClass} onClick={back} disabled={currentPage === 1}>Назад</button>
                <button className={forwardClass} onClick={forward} disabled={currentPage === totalPage}>Вперед</button>
            </div>
            <p className='current-page'>Текущая страница: {currentPage} из {totalPage}</p>
        </div>
    )
}
