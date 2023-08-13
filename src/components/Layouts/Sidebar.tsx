import React from "react";
import TreeMenu from "./TreeMenu";
import HomeIcon from "@/components/icons/HomeIcon";
import ShippingIcon from "@/components/icons/ShippingIcon";

export interface TreeItemData {
  id: number;
  icon?: JSX.Element;
  link?: string;
  label: string;
  children: TreeItemData[];
}
const Sidebar = () => {
  const treeData: TreeItemData[] = [
    {
      id: 1,
      link: "/",
      icon: <HomeIcon />,
      label: "Dashboard",
      children: [],
    },
    {
      id: 3,
      label: "Shipping",
      icon: <ShippingIcon />,
      children: [
        {
          id: 4,
          label: "Shipping for me",
          link: "/shipping-me",
          icon: <HomeIcon />,
          children: [],
        },
        {
          id: 6,
          label: "Shipping for you",
          link: "/shipping-you",
          icon: <HomeIcon />,
          children: [
            {
              id: 9,
              label: "Alibaba",
              link: "/alibaba",
              children: [
                {
                  id: 10,
                  label: "Balibaba",
                  link: "/bali-baba",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      link: "/refund",
      icon: <HomeIcon />,
      label: "Refund",
      children: [],
    },
  ];
  return (
    <div>
      <TreeMenu data={treeData} />
    </div>
  );
};

export default Sidebar;
