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
  slug: string;
  icon: IconDefinition;
  path: string;
  dropdownItems: SidebarItem[];
}
const Sidebar = () => {
  const menuData: SidebarItem[] = [
    {
      title: "Dashboard",
      slug: "dashboard",
      icon: faDashboard,
      path: "/dashboard",
      dropdownItems: [],
    },
    {
      title: "Buy Ship",
      slug: "buy-ship",
      icon: faCartShopping,
      path: "/dashboard/buy-ship",
      dropdownItems: [
        {
          title: "My Order",
          slug: "my-order",
          icon: faCartFlatbed,
          path: "/dashboard/buy-ship/my-order",
          dropdownItems: [],
        },
        {
          title: "My Request",
          slug: "my-request",
          icon: faRecycle,
          path: "/dashboard/buy-ship/my-request",
          dropdownItems: [],
        },
      ],
    },
    {
      title: "My Wallet",
      slug: "my-wallet",
      icon: faWallet,
      path: "/dashboard/my-wallet",
      dropdownItems: [
        {
          title: "My Balance",
          slug: "my-balance",
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
