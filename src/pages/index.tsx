import TreeMenu from "@/components/TreeMenu";
import React from "react";

import HomeIcon from "@/components/icons/HomeIcon";
import ShippingIcon from "@/components/icons/ShippingIcon";

export interface TreeItemData {
  id: number;
  icon?: JSX.Element;
  link?: string;
  label: string;
  children: TreeItemData[];
}
const Home = () => {
  const treeData: TreeItemData[] = [
    {
      id: 1,
      link: "/",
      icon: <HomeIcon/>,
      label: "Dashboard",
      children: [],
    },
    {
      id: 3,
      label: "Shipping",
      icon: <ShippingIcon/>,
      children: [
        {
          id: 4,
          label: "Shipping for me",
          link: "/shipping-me",
          icon: <HomeIcon/>,
          children: [],
        },
        {
          id: 6,
          label: "Shipping for you",
          link: "/shipping-you",
          icon: <HomeIcon/>,
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
      link: "/",
      icon:<HomeIcon/>,
      label: "Refund",
      children: [],
    },
  ];

  return (
    <div>
     
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <TreeMenu data={treeData} />
        </div>
        <div className="col-span-9">Context</div>
      </div>
    </div>
  );
};

export default Home;
