export type MainProps = {
    itemsPerPage: number
}

export type PaginationObject = {
    total: number, 
    current: number,
    itemsPerPage: number
}

export type PaginationProps = {
    currentPage: number,
    totalPage: number,
    forward: () => void,
    back: () => void
}