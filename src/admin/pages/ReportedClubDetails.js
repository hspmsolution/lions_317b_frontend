import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Button,
  Box,
  ButtonGroup,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";

import { Edit, Delete, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

const ReportedClubDetails = () => {
  return (
    <>
      <form>
        <Box bgcolor="white" p={3} borderRadius={4}>
          <Typography variant="h5" gutterBottom style={{ marginTop: "16px" }}>
            About Club Details
          </Typography>

          <br />

          <div>Fetch About Club Details</div>
        </Box>
      </form>

      <br />
      <br />

      <Box bgcolor={"white"} p={3} borderRadius={4}>
        <Typography variant="h6">Club's Permanent Projects</Typography>
        <Grid
          container
          justifyContent="space-between"
          spacing={3}
          style={{ marginTop: "16px" }}
        ></Grid>
        <TableContainer style={{ marginTop: "16px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Sr No</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="right">Image</TableCell>

                {/* <TableCell align="center">Action</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {filteredRows.map((row, index) => ( */}
              <TableRow>
                <TableCell align="center" component="th" scope="row">
                  {/* {index + 1} */}
                </TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="center"></TableCell>
                {/* <TableCell align="center">
                  <IconButton aria-label="edit" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="delete" color="error">
                    <Delete />
                  </IconButton>
                </TableCell> */}
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ReportedClubDetails;
