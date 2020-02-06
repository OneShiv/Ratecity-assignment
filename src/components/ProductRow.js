import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from '@material-ui/core';

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
}))(TableRow);

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const ProductRow = props => {
	const { name, minBorrowingAmount, maxBorrowingAmount, minDeposit, minLoanTerm, maxLoanTerm } = props;
	return (
		<StyledTableRow key={name}>
			<StyledTableCell component="th" scope="row">
				{name}
			</StyledTableCell>
			<StyledTableCell align="right">{minLoanTerm}</StyledTableCell>
			<StyledTableCell align="right">{maxLoanTerm}</StyledTableCell>
			<StyledTableCell align="right">{minBorrowingAmount}</StyledTableCell>
			<StyledTableCell align="right">{maxBorrowingAmount}</StyledTableCell>
			<StyledTableCell align="right">{minDeposit}</StyledTableCell>
		</StyledTableRow>
	);
};

export default ProductRow;
