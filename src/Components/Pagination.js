import React from "react";
import Button from '@mui/material/Button';

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = []

    for (let i=1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key = {number}>
                            <Button variant="contained" href="#" className="page-link" onClick = {() => paginate(number)}>
                                {number}
                            </Button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination