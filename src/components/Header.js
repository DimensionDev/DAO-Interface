import * as React from "react";
import { Tip } from "./Tip";
import { formatBalance, formatCurrency } from "../utils/formatter";
import {
  boxBackgroundColorMapping,
  subTextColorMapping,
  primaryTextColorMapping,
} from "../utils/style";

export function Header(props) {
  const { payload, mode, usdRate } = props;

  const boxBackgroundColor = boxBackgroundColorMapping[mode];
  return (
    <>
      <div className="flex overflow-visible mb-4">
        {payload.logoUri ? (
          <img
            alt=""
            className="rounded w-20 h-20 mr-4"
            src={payload.logoUri}
          />
        ) : (
          <div
            className={`rounded w-20 h-20 mr-4 flex justify-center items-center text-4xl ${boxBackgroundColor}`}
          >
            <p>🧃</p>
          </div>
        )}
        <div className="-translate-y-3 transform">
          <p
            onClick={() => {
              if ("parentIFrame" in window) {
                window.parentIFrame.size(1000, 1200);
              }
            }}
            className={
              "font-semibold text-2xl " + primaryTextColorMapping[mode]
            }
          >
            {payload.name}
          </p>
          <p
            className={`text-base break-words max-w-md ${subTextColorMapping[mode]}`}
          >
            {payload.description}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full text-sm">
        <div
          className={`w-36 h-28 ${boxBackgroundColor}  rounded flex flex-col items-center justify-between p-3`}
        >
          <p className={`${subTextColorMapping[mode]} flex items-center`}>
            <span>VOLUME</span>
            <Tip
              mode={mode}
              title={
                "The total amount received by this project through Juicebox since it was created."
              }
            />
          </p>
          <p className={`${primaryTextColorMapping[mode]}`}>
            {formatCurrency(Math.ceil(formatBalance(payload.totalPaid, 18)))}
          </p>

          <p className={`${subTextColorMapping[mode]} flex items-center`}>
            {usdRate
              ? "$" +
                formatCurrency(
                  Math.ceil(formatBalance(payload.totalPaid * usdRate, 18))
                )
              : "-"}
          </p>
        </div>
        <div
          className={`w-40 h-28 ${boxBackgroundColor} rounded flex flex-col items-center justify-between p-3`}
        >
          <p className={`${subTextColorMapping[mode]} flex items-center`}>
            <span>IN JUICEBOX</span>
            <Tip
              mode={mode}
              title={"The balance of this project in the Juicebox contract."}
            />
          </p>
          <p className={`${primaryTextColorMapping[mode]}`}>
            Ξ {formatCurrency(formatBalance(payload.currentBalance, 18))}
          </p>
          {payload.overflow ? (
            <p className={`${subTextColorMapping[mode]} flex items-center`}>
              <span>{payload.overflow * 100}% OVERFLOW</span>
              <Tip
                mode={mode}
                title={
                  payload.target === "0"
                    ? "The target for this funding cycle is 0, meaning all funds in Juicebox are currently considered overflow. "
                    : "" +
                      "Overflow can be redeemed by token holders, but not distributed."
                }
              />
            </p>
          ) : (
            <p className="opacity-0">0</p>
          )}
        </div>
        <div
          className={`w-48 h-28 ${boxBackgroundColor} rounded flex flex-col items-center justify-between p-3`}
        >
          <p className={`${subTextColorMapping[mode]} flex items-center`}>
            <span>IN WALLET</span>
            <Tip
              mode={mode}
              title={
                "The balance of the wallet that owns this Juicebox project."
              }
            />
          </p>
          <p
            className={`${primaryTextColorMapping[mode]} flex justify-center flex-wrap`}
          >
            <span>
              {formatCurrency(
                Math.ceil(formatBalance(payload.inWallet.jbx, 18))
              )}{" "}
              JBX
            </span>{" "}
            <span>+</span>{" "}
            <span>Ξ{formatBalance(payload.inWallet.eth, 18)}</span>
          </p>
          <p
            className={`${subTextColorMapping[mode]} flex items-center opacity-0`}
          >
            ALL ASSETS
          </p>
        </div>
      </div>
    </>
  );
}
