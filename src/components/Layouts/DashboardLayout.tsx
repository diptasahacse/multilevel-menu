import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
interface DashboardProps {
  children: ReactNode;
}
const DashboardLayout = ({children}: DashboardProps) => {
  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 duration-300 ease-linear">
          <Sidebar/>
        </div>

        {/* Content */}
        <div className="flex flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
