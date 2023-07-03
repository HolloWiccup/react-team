import {useState} from "react";
import cls from './Pagination.module.css'

const defaultPaginationValue = {
  totalPages: 10,
  currentPage: 1,
  itemsPerPage: 10
}
const totalItems = defaultPaginationValue.totalPages * defaultPaginationValue.itemsPerPage
const createItems = () => {
  const array = [];
  for (let i = 0; i < totalItems; i++) {
    array.push(i + 1)
  }
  return array
}

const items = createItems();

export function Pagination() {
  const [pagination, setPagination] = useState(defaultPaginationValue)

  const handlePaginationChange = (page: number) => {

    setPagination({...pagination, currentPage: pagination.currentPage + page})
  }

  const elements = items.slice(
    pagination.itemsPerPage * (pagination.currentPage - 1),
    pagination.itemsPerPage * (pagination.currentPage)
  )

  // const handleNextClick

  return (<div className={cls.pagination}>
    <button type='button' disabled={pagination.currentPage >= pagination.totalPages}
            onClick={() => handlePaginationChange(1)}> Next
    </button>
    <button type='button' disabled={pagination.currentPage <= 1}
            onClick={() => handlePaginationChange(-1)}> Back
    </button>
    <ul>
      {elements.map(element => <li key={element}>{element}</li>)}
    </ul>
    <p>{pagination.currentPage} of {pagination.totalPages}</p>
  </div>)
}