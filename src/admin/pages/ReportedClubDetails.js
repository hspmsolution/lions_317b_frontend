import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { tableCellClasses } from "@mui/material/TableCell";

import { Edit, Delete, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, projectDetails } from "../../actions/activity";
import { API_URL } from "../../api";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ReportedClubDetails = () => {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.activity.about);
  const projects = useSelector((state) => state.activity.projects);
  // Delete Dialog

  const [openDel, setOpenDel] = React.useState(false);
  const [selectId, setSelectId] = useState(0);
  const handleClickOpenDel = (id) => {
    setOpenDel(true);
    setSelectId(id);
  };

  const handleCloseDel = () => {
    setOpenDel(false);
    setSelectId(0);
  };

  useEffect(() => {
    dispatch(projectDetails());
  }, []);

  return (
    <>
      <form>
        <Box bgcolor="white" p={3} borderRadius={4}>
          <Typography variant="h5" gutterBottom style={{ marginTop: "16px" }}>
            About Club Details
          </Typography>

          <br />

          <div className="clubDetails">
            <p
              dangerouslySetInnerHTML={{
                __html: about,
              }}
            />
          </div>
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
        <TableContainer component={Paper}>
          <Table aria-label="news table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Sr No.</StyledTableCell>
                <StyledTableCell>Project Title</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {projects?.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell>{row.title}</StyledTableCell>
                  <StyledTableCell>{row.description}</StyledTableCell>
                  <StyledTableCell>{row.date?.slice(0, 10)}</StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      width: "150px",
                      height: "150px",
                      padding: "0.5rem",
                    }}
                  >
                    <img
                      src={`${API_URL + row?.image}`}
                      srcSet={`${API_URL + row?.image}`}
                      alt={"projects"}
                    />
                  </StyledTableCell>

                  <StyledTableCell>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => {
                        handleClickOpenDel(row.id);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Delete Dialog */}
        <Dialog
          open={openDel}
          onClose={handleCloseDel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete? This action cannot be reversed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDel}>Cancel</Button>
            <Button
              onClick={() => {
                dispatch(deleteProject(selectId));
                handleCloseDel();
              }}
              autoFocus
              color="error"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default ReportedClubDetails;
