import React, { ReactNode } from "react";
import SidebarNew from "./Sidebar";
interface DashboardProps {
  children: ReactNode;
}
const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <div>
      <div className="flex">
        <div className="w-72 h-screen bg-gray-200 duration-300 ease-linear">
          <SidebarNew />
        </div>

        {/* Content */}
        <div className=" flex-1 bg-slate-300">
          <div className="flex justify-center items-center h-full text-3xl font-bold text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
