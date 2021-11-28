import * as React from "react";
import { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import { useQueryParam, StringParam } from "use-query-params";
import QuestionDarkIcon from "../images/question.png";
import QuestionLightIcon from "../images/question_light.png";

function Tip(props) {
  const QuestionIcon =
    props.mode === "light" ? QuestionLightIcon : QuestionDarkIcon;
  return (
    <Tooltip title={props.title} arrow placement="top">
      <img alt="" src={QuestionIcon} className="w-4 h-4 ml-1 cursor-pointer" />
    </Tooltip>
  );
}

// markup
const IndexPage = () => {
  const isSSR = typeof window === "undefined";
  const [mode] = useQueryParam("mode", StringParam);

  if (isSSR) return null;

  return (
    <main className="mx-8 py-2">
      <div className="flex overflow-visible mb-4">
        <img
          alt=""
          className="rounded w-20 h-20 mr-4"
          src="https://avatars.githubusercontent.com/u/63733714?v=4"
        />
        <div className="-translate-y-3 transform">
          <p
            className={
              "font-semibold text-2xl " +
              (mode === "dark" ? "text-gray-100" : "")
            }
          >
            ConstitutionDAO
          </p>
          <p className={`text-base ${mode === "dark" ? "text-gray-500" : ""}`}>
            We are buying the United States Constitution.
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full text-sm">
        <div
          className={`w-36 h-28 ${
            mode === "dark"
              ? "bg-gray-dao-header-box-dark"
              : "bg-gray-dao-header-box-light"
          }  rounded flex flex-col items-center justify-between py-3`}
        >
          <p
            className={`${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            } flex items-center`}
          >
            <span>VOLUME</span>
            <Tip
              mode={mode}
              title={
                "The total amount received by this project through Juicebox since it was created."
              }
            />
          </p>
          <p className={`${mode === "dark" ? "text-gray-100" : ""}`}>11,605</p>
          <p
            className={`${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            } flex items-center`}
          >
            $46,423.732
          </p>
        </div>
        <div
          className={`w-40 h-28 ${
            mode === "dark"
              ? "bg-gray-dao-header-box-dark"
              : "bg-gray-dao-header-box-light"
          } rounded flex flex-col items-center justify-between py-3`}
        >
          <p
            className={`${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            } flex items-center`}
          >
            <span>IN JUICEBOX</span>
            <Tip
              mode={mode}
              title={"The balance of this project in the Juicebox contract."}
            />
          </p>
          <p className={`${mode === "dark" ? "text-gray-100" : ""}`}>
            Ξ5,188.35
          </p>
          <p
            className={`${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            } flex items-center`}
          >
            <span>100% OVERFLOW</span>
            <Tip
              mode={mode}
              title={
                "The target for this funding cycle is 0, meaning all funds in Juicebox are currently considered overflow. Overflow can be redeemed by token holders, but not distributed."
              }
            />
          </p>
        </div>
        <div
          className={`w-48 h-28 ${
            mode === "dark"
              ? "bg-gray-dao-header-box-dark"
              : "bg-gray-dao-header-box-light"
          } rounded flex flex-col items-center justify-between py-3`}
        >
          <p
            className={`${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            } flex items-center`}
          >
            <span>IN WALLET</span>
            <Tip
              mode={mode}
              title={
                "The balance of the wallet that owns this Juicebox project."
              }
            />
          </p>
          <p className={`${mode === "dark" ? "text-gray-100" : ""}`}>
            0 JBX + Ξ543.30
          </p>
          <p
            className={`${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            } flex items-center`}
          >
            ALL ASSETS
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
