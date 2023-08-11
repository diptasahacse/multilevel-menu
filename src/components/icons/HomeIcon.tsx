import React from "react";
import IProps from "./interface";

const HomeIcon = ({ className, height = "20", width = "20" }: IProps) => {
  return (
    <svg
    className={"fill-current " + className}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" />
    </svg>
  );
};

export default HomeIcon;
