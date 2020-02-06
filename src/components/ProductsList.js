import React from 'react';
import ProductRow from './ProductRow';
import { Table, TableContainer, Paper, TableCell, TableRow, TableHead, TableBody, TablePagination } from '@material-ui/core';
import './ProductList.css';

const ProductList = props => (
    <div className="productlist-container">
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Min Term</TableCell>
                        <TableCell align="right">Max Term</TableCell>
                        <TableCell align="right">Min Borrow</TableCell>
                        <TableCell align="right">Max Borrow</TableCell>
                        <TableCell align="right">Min Deposit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{props.rows.map(row => <ProductRow {...row} key={row.uuid} />)}</TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[15, 25, 30]}
            component="div"
            count={props.total}
            rowsPerPage={props.rowsPerPage}
            page={props.pageNo}
            onChangePage={props.updatePageNo}
            onChangeRowsPerPage={props.updateRowsPerPage}
        />
    </div>
)

export default ProductList;
