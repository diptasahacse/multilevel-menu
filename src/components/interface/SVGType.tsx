import React from "react";
export type SVGType = {
  color?: string;
  height?: string | number;
  width?: string | number;
  
} & React.SVGAttributes<SVGAElement>;

