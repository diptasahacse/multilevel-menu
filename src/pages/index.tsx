import TreeMenu from "@/components/TreeMenu";
import React from "react";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import HomeImage from "../assets/home.png";
import ShoppingImage from "../assets/shopping-cart.png";
import BagImage from "../assets/bag.png";
import ShoppingBagImage from "../assets/shopping-bag.png";
import RefundImage from "../assets/refund.png";
import { StaticImageData } from "next/image";
export interface TreeItemData {
  id: number;
  icon?: StaticImageData;
  link?: string;
  label: string;
  children: TreeItemData[];
}
const Home = () => {
  const treeData: TreeItemData[] = [
    {
      id: 1,
      link: "/",
      icon: HomeImage,
      label: "Dashboard",
      children: [],
    },
    {
      id: 3,
      label: "Shipping",
      icon: ShoppingImage,
      children: [
        {
          id: 4,
          label: "Shipping for me",
          link: "/shipping-me",
          icon: BagImage,
          children: [],
        },
        {
          id: 6,
          label: "Shipping for you",
          link: "/shipping-you",
          icon: ShoppingBagImage,
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
      icon:RefundImage,
      label: "Refund",
      children: [],
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Multi level Menu</h2>
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
