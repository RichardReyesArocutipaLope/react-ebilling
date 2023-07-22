import React from 'react'
import { FaTrash, FaPenSquare, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const Pagination = () => {
    return (
        <>
            <div>

                <span className='data-table__action data-table__action--arrow'>
                    <FaArrowLeft />
                </span>
                <span className='data-table__action data-table__action--number'>1</span>
                <span className='data-table__action data-table__action--arrow'>
                    <FaArrowRight />
                </span>
            </div>
            <p>Se encontraron 4 registros</p>

        </>
    )
}
