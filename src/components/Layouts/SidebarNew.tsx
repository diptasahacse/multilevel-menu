import React from "react";
import {
  faDashboard,
  faCartShopping,
  faCartFlatbed,
  faRecycle,
  faWallet,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import MenuItemNew from "./MenuItemNew";
export interface SidebarItem {
  title: string;
  icon: IconDefinition;
  path: string;
  dropdownItems: SidebarItem[];
  key: number;
}
const Sidebar = () => {
  const menuData: SidebarItem[] = [
    {
      key: 1,
      title: "Dashboard",
      icon: faDashboard,
      path: "/dashboard",
      dropdownItems: [],
    },
    {
      key: 2,
      title: "Buy & Ship For Me",
      icon: faDashboard,
      path: "/dashboard/buy-ship-for-me",
      dropdownItems: [],
    },
    {
      key: 3,
      title: "Buy Ship",
      icon: faCartShopping,
      path: "/dashboard/buy-ship",
      dropdownItems: [
        {
          key: 3.1,
          title: "My Order",
          icon: faCartFlatbed,
          path: "/dashboard/buy-ship/my-order",
          dropdownItems: [],
        },
        {
          key: 3.2,
          title: "My Request",
          icon: faRecycle,
          path: "/dashboard/buy-ship/my-request",
          dropdownItems: [],
        },
        {
          key: 3.3,
          title: "Ship For me",
          icon: faRecycle,
          path: "/dashboard/buy-ship/ship-for-me",
          dropdownItems: [],
        },
      ],
    },
    {
      key: 4,
      title: "My Wallet",
      icon: faWallet,
      path: "/dashboard/my-wallet",
      dropdownItems: [
        {
          key: 4.1,
          title: "My Balance",
          icon: faDollarSign,
          path: "/dashboard/my-wallet/my-balance",
          dropdownItems: [],
        },
      ],
    },
  ];
  return (
    <div className="py-3 px-1">
      <ul>
        {menuData.map((item: SidebarItem, index) => (
          <MenuItemNew key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
