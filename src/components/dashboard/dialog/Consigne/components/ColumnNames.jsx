import React from "react";
import {
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  ButtonBase,
  Box,
} from "@mui/material";
const ColumnNames = () => {
  return (
    <Box
      p={1}
      display="flex"
      alignItems="center"
      sx={{ background: "#F4F4F4" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        sx={{ flex: 1 }}
      >
        <Typography variant="subtitle2" color="primary.contrastText">
          Nom
        </Typography>

        <Typography variant="subtitle2" color="primary.contrastText">
          Date du RDV
        </Typography>
      </Box>

      <Box sx={{ flex: 0.8, textAlign: "center" }}>
        <Typography variant="subtitle2" color="primary.contrastText">
          Consignes
        </Typography>
      </Box>
    </Box>
  );
};

export default ColumnNames;

const colNames = ["Nom", "Date du RDV", "Consignes"];
