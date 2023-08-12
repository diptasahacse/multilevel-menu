import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import SidebarNew from "./SidebarNew";
interface DashboardProps {
  children: ReactNode;
}
const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 duration-300 ease-linear">
          {/* <Sidebar/> */}
          <SidebarNew />
        </div>

        {/* Content */}
        <div className="flex flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
