import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

 
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
const data=useSelector(state=>state.data)
console.log(data )
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Institution Name</StyledTableCell>
            <StyledTableCell align="right">Branch Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Contact Number</StyledTableCell>
            <StyledTableCell align="right">Branch Incharge</StyledTableCell>
            <StyledTableCell align="right">Pincode Covered</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">{index+1}</StyledTableCell>
              <StyledTableCell align="right" >
                {row.InsitutionName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.BranchName}</StyledTableCell>
              <StyledTableCell align="right">{row.Address}</StyledTableCell>
              <StyledTableCell align="right">{row.City}</StyledTableCell>
              <StyledTableCell align="right">{row.ContactNumber.join(", ")}</StyledTableCell>
              <StyledTableCell align="right">{row.BranchIncharge}</StyledTableCell>
              <StyledTableCell align="right">{row.Pincodecovered.join(", ")}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
