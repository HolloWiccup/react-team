import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PaginationReducer, PaginationContext } from '../../../context/paginationContext';
import { PAGINATION_TYPES } from '../../../reducer/types';

export default function PaginationBlock(): JSX.Element {
    const paginationData = React.useContext(PaginationContext)
    const paginationDispatch = React.useContext(PaginationReducer)

    return (
        <Stack spacing={2}>
        <Pagination
            page={paginationData.currentPage}
            count={paginationData.totalPages}
            onChange={(event, page) => {
                if (page !== paginationData.currentPage) {
                    paginationDispatch({type: PAGINATION_TYPES.SET_CURRENT_PAGE, payload: page})
                }}
            }
            renderItem={(item) => (
            <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
            />
            )}
        />
        </Stack>
    );
}
