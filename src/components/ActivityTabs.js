import * as React from "react";
import { createSubTabSelectorStyle } from "../utils/style";
import { makeStyles } from "@mui/styles";
import { a11yProps } from "../utils/utils";
import { TabPanel } from "./TabPanel";
import { Tip } from "./Tip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  formatBalance,
  formatCurrency,
  formatEthereumAddress,
} from "../utils/formatter";

export const useStyles = makeStyles(() => ({
  activityTabs: {
    "& .MuiTabs-scroller": {
      height: 20,
      borderBottom: "1px solid #2F3336",
    },
  },
  mainTabs: {
    "& .MuiTabs-scroller": {
      borderBottom: "1px solid #2F3336",
    },
  },
}));

export function ActivityTabs(props) {
  const { mode, payload } = props;
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  console.log({ classes });
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const keyTextColor = mode === "light" ? "text-gray-500" : "text-gray-400";
  const valueTextColor = mode === "light" ? "text-gray-900" : "text-gray-100";

  return (
    <Box sx={{ width: "100%" }} className="mt-2">
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label=""
          className={classes.subTabs + " h-6"}
        >
          <Tab
            className={createSubTabSelectorStyle(mode, value, 0)}
            label="Pay"
            {...a11yProps(0)}
          />
          <Tab
            className={createSubTabSelectorStyle(mode, value, 1)}
            label="Redeem"
            {...a11yProps(1)}
          />
          <Tab
            className={createSubTabSelectorStyle(mode, value, 2)}
            label="Withdraw"
            {...a11yProps(2)}
          />
          <Tab
            className={createSubTabSelectorStyle(mode, value, 3)}
            label="Reserves"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
    </Box>
  );
}
