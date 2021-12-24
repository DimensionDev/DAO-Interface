import * as React from "react";
import { createTabSelectorStyle } from "../utils/style";
import { a11yProps } from "../utils/utils";
import { TabPanel } from "./TabPanel";
import { Tip } from "./Tip";
import { ActivityTabs, useStyles } from "./ActivityTabs";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  formatBalance,
  formatCurrency,
  formatEthereumAddress,
} from "../utils/formatter";

export function MainTabs(props) {
  const { mode, payload } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const { classes } = useStyles();

  const keyTextColor = mode === "light" ? "text-gray-500" : "text-gray-400";
  const valueTextColor = mode === "light" ? "text-gray-900" : "text-gray-100";

  return (
    <Box sx={{ width: "100%" }} className="mt-4">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="">
          <Tab
            className={createTabSelectorStyle(mode, value, 0)}
            label="Info"
            {...a11yProps(0)}
          />
          {/* <Tab
            className={createTabSelectorStyle(mode, value, 1)}
            label="Activity"
            {...a11yProps(1)}
          /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p className={`${valueTextColor} flex items-center mb-2`}>
          <span>{payload.holdingSymbol}</span>
          <Tip
            mode={mode}
            title={`${payload.holdingSymbol} ERC20 are distributed to anyone who pays this project. If the project has set a funding target, tokens can be redeemed for a portion of the project's overflow whether or not they have been claimed yet.`}
          />
        </p>
        <div className="flex justify-between font-normal mb-2">
          <p className={keyTextColor}>Address:</p>
          <p className={valueTextColor}>
            {formatEthereumAddress(
              "0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71",
              4
            )}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://etherscan.io/address/0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71"
            >
              <OpenInNewIcon className="cursor-pointer text-xl" />
            </a>
          </p>
        </div>
        <div className="flex justify-between mb-2">
          <p className={keyTextColor}>Total supply:</p>
          <p className={valueTextColor}>
            {formatCurrency(payload.totalSupply, 0)}
          </p>
        </div>
        {/* <div className="flex justify-between mb-2">
          <p className={keyTextColor}>Your balance:</p>
          <p className={valueTextColor}>0 PEOPLE</p>
        </div> */}
        <div>
          <p className={`${valueTextColor} flex items-center mb-2 mt-4`}>
            <span>Funding cycle</span>
            <Tip
              mode={mode}
              title={
                "A project's lifetime is defined in funding cycles. If a funding target is set, the project can withdraw no more than the target for the duration of the cycle."
              }
            />
          </p>
          <div
            className={
              (mode === "dark"
                ? "bg-gray-dao-header-box-dark"
                : "bg-gray-dao-header-box-light") + " p-3"
            }
          >
            <p className={valueTextColor}>Details</p>
            <div className="flex flex-wrap">
              <p className="w-2/4 mt-3">
                <span className={keyTextColor}>Target: </span>
                <span className={valueTextColor}>
                  Ξ{formatBalance(payload.fundingCycles[0].target, 18)}
                </span>
              </p>
              <p className="w-2/4 mt-3">
                <span className={keyTextColor}>Duration: </span>
                <span className={valueTextColor}>
                  {payload.fundingCycles[0].duration}
                </span>
              </p>
              {payload.fundingCycles[0].reserved !== undefined ? (
                <p className="w-2/4 mt-3">
                  <span className={keyTextColor}>Reserved: </span>
                  <span className={valueTextColor}>
                    {payload.fundingCycles[0].reserved * 100}%
                  </span>
                </p>
              ) : null}
              {payload.fundingCycles[0].discount !== undefined ? (
                <p className="w-2/4 mt-3">
                  <span className={keyTextColor}>Discount rate: </span>
                  <span className={valueTextColor}>
                    {payload.fundingCycles[0].discount * 100}%
                  </span>
                </p>
              ) : null}
              {payload.fundingCycles[0].toETH !== undefined ? (
                <p className="w-2/4 mt-3">
                  <span className={keyTextColor}>
                    {payload.fundingCycles[0].toETHSymbol}/ETH:{" "}
                  </span>
                  <span className={valueTextColor}>
                    {payload.fundingCycles[0].toETH * 100}%
                  </span>
                </p>
              ) : null}
              {payload.fundingCycles[0].bondingCurve !== undefined ? (
                <p className="w-2/4 mt-3">
                  <span className={keyTextColor}>Bonding curve: </span>
                  <span className={valueTextColor}>
                    {payload.fundingCycles[0].bondingCurve * 100}%
                  </span>
                </p>
              ) : null}
              <p className="w-full mt-3">
                <span className={keyTextColor}>Reconfiguration strategy: </span>
                <span className={valueTextColor}>
                  {payload.fundingCycles[0].strategy ?? "No strategy"}
                </span>
              </p>
              <p className={"w-full mt-3 " + keyTextColor}>
                Address: 0x0000000000000000000000000000000000000000
              </p>
              <p className={"w-full mt-3 " + keyTextColor}>
                Any reconfiguration to an upcoming funding cycle will take
                effect once the current cycle ends. A project with no strategy
                may be vulnerable to being rug-pulled by its owner.
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <ActivityTabs mode={mode} payload={payload} /> */}
      </TabPanel>
    </Box>
  );
}
