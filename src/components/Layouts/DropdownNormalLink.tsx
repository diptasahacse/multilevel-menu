import { useRouter } from 'next/router';
import React from 'react';
import { SidebarItem } from './SidebarNew';
import Link from 'next/link';

interface TreeItemProps {
  item: SidebarItem;
}
const DropdownNormalLink = ({ item }: TreeItemProps) => {

  return (
    <li>
      <Link
        href={item.path}
        className={"group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"}
      >
        {item.icon}
        {item.title}
      </Link>
    </li>
  );
};

export default DropdownNormalLink;
