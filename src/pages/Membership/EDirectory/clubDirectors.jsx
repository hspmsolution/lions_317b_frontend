import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";


export default function ClubDirectorsTable({ data }) {

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          display: "flex",
          minWidth: 250,
          maxWidth: 350,
          backgroundColor: "#F4F6F8",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  textAlign: "center",
                  backgroundColor: "#3b557e",
                  color: "#fff",
                }}
              >
                Zone Name
                <Typography variant="h5">Zone Chair</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Table aria-label="simple table" sx={{ borderRadius: "6px" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: "#48689b", color: "#fff" }}>
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ backgroundColor: "#48689b", color: "#fff" }}
                    align="right"
                  >
                    Id
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((member, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {member.fullName}
                    </TableCell>
                    <TableCell align="right">{member.member_id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
