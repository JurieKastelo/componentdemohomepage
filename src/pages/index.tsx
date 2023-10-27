import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import Desktop from "../../public/desktop.svg";
import Phone from "../../public/phone.svg";
import Image from "next/image";
import GitHubLogo from "../../public/github-icon.svg";
import Check from "../../public/check.svg";
import Link from "next/link";

export default function Info() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        mt: 10,
      }}
    >
      <Box mt={10} mb={5} fontSize={40}>
        UI Libraries
      </Box>
      <TableContainer sx={{ width: 1200 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Library</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Desktop</TableCell>
              <TableCell align="center">View Demo</TableCell>
              <TableCell
                align="right"
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Box sx={{ mr: 2 }}>
                  <Image
                    src={GitHubLogo}
                    width={30}
                    height={30}
                    alt="GitHubLogo"
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Mantine</TableCell>
              <TableCell align="center">
                <Image src={Check} width={20} height={20} alt="Check" />
              </TableCell>
              <TableCell align="center">
                <Image src={Check} width={20} height={20} alt="Check" />
              </TableCell>
              <TableCell align="center">
                <Button href="https://mantine-juriewagener.vercel.app/">
                  View
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button href="https://github.com/JurieKastelo/mantine">
                  View
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={10} fontSize={40}>
        Next In Line
      </Box>

      <TableContainer sx={{ width: 1200 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Libraries</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell align="left">Next UI</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell align="left">Tailwind</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell align="left">Rebass</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell align="left">Gluestack</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
