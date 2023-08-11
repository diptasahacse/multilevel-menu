import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
interface DashboardProps {
  children: ReactNode;
}
const DashboardLayout = ({children}: DashboardProps) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        {/* Sidebar */}
        <div className="col-span-3">
          <Sidebar/>
        </div>

        {/* Content */}
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
