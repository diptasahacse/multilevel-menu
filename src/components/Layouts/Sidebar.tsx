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
import MenuItem from "./MenuItem";
export interface SidebarItem {
  title: string;
  icon: IconDefinition;
  path: string;

  dropdownItems: SidebarItem[];
  key: string;
}
const Sidebar = () => {
  const menuData: SidebarItem[] = [
    {
      key: "1",
      title: "Dashboard",

      icon: faDashboard,
      path: "/dashboard",
      dropdownItems: [],
    },
    {
      key: "2",
      title: "Buy & Ship For Me",
      icon: faDashboard,
      path: "/dashboard/buy-ship-for-me",
      dropdownItems: [],
    },
    {
      key: "3",
      title: "Buy Ship",
      icon: faCartShopping,
      path: "/dashboard/buy-ship",
      dropdownItems: [
        {
          key: "3.1",
          title: "My Order",
          icon: faCartFlatbed,

          path: "/dashboard/buy-ship/my-order",
          dropdownItems: [],
        },
        {
          key: "3.2",
          title: "My Request",

          icon: faRecycle,
          path: "/dashboard/buy-ship/my-request",
          dropdownItems: [],
        },
        {
          key: "3.3",
          title: "Ship For me",
          icon: faRecycle,

          path: "/dashboard/buy-ship/ship-for-me",
          dropdownItems: [
            {
              key: "3.3.1",
              title: "Ship For you",
              icon: faRecycle,

              path: "/dashboard/buy-ship/ship-for-me/ship-for-you",
              dropdownItems: [],
            },
            {
              key: "3.3.2",
              title: "My Balance",
              icon: faRecycle,
              path: "/dashboard/buy-ship/ship-for-me/my-balance",
              dropdownItems: [],
            },
            {
              key: "3.3.3",
              title: "My Request",
              icon: faRecycle,
              path: "/dashboard/buy-ship/ship-for-me/my-request",
              dropdownItems: [],
            },
            {
              key: "3.3.4",
              title: "Settings",
              icon: faRecycle,
              path: "/dashboard/buy-ship/ship-for-me/settings",
              dropdownItems: [
                {
                  key: "3.3.4.1",
                  title: "Account Settings",
                  icon: faRecycle,
                  path: "/dashboard/buy-ship/ship-for-me/settings/account-settings",
                  dropdownItems: [],
                },
                {
                  key: "3.3.4.2",
                  title: "My Balance",
                  icon: faRecycle,
                  path: "/dashboard/buy-ship/ship-for-me/settings/my-balance",
                  dropdownItems: [],
                },
              ],
            },
          ],
        },
        {
          key: "3.4",
          title: "Buy & Ship For Me",
          icon: faDashboard,
          path: "/dashboard/buy-ship/buy-ship-for-me",
          dropdownItems: [],
        },
      ],
    },
    {
      key: "4",
      title: "My Wallet",
      icon: faWallet,

      path: "/dashboard/my-wallet",
      dropdownItems: [
        {
          key: "4.1",
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
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
