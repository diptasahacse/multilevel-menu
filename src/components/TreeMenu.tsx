// TreeMenu.tsx
import React from "react";
import TreeItem from "./TreeItem";
import { TreeItemData } from "@/pages";

interface TreeMenuProps {
  data: TreeItemData[];
}

const TreeMenu: React.FC<TreeMenuProps> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <TreeItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TreeMenu;
