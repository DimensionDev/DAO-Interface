import * as React from "react";
import { Tooltip } from "@mui/material";
import QuestionDarkIcon from "../images/question.png";
import QuestionLightIcon from "../images/question_light.png";

export function Tip(props) {
  const QuestionIcon =
    props.mode === "light" ? QuestionLightIcon : QuestionDarkIcon;
  return (
    <Tooltip title={props.title} arrow placement="top">
      <img alt="" src={QuestionIcon} className="w-4 h-4 ml-1 cursor-pointer" />
    </Tooltip>
  );
}
