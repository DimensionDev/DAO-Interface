import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="py-4">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
