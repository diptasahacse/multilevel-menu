import React from "react";
import SidebarDropdown from "./SidebarDropdown";
import NormalLink from "./NormalLink";
import { SidebarItem } from "./SidebarNew";
interface TreeItemProps {
  item: SidebarItem;
}
const MenuItem: React.FC<TreeItemProps> = ({ item }) => {

  return (
    <>
      {item.dropdownItems.length === 0 ? (
        <NormalLink item={item} />
      ) : (
        <SidebarDropdown item={item} />
      )}
    </>
  );
};

export default MenuItem;
