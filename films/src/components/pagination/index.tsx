import React from 'react'
import './style.css'

export default function Pagination() {
    return (
        <div className='pagin-block'>
            <div className='pagin-btns'>
                <button className='btn'>Back</button>
                <button className='btn'>Next</button>
            </div>
            <p className='current-page'>{1} из {20}</p>
        </div>
    )
}