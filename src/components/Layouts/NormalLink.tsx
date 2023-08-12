import React from 'react';

import { useRouter } from 'next/router';
import { SidebarItem } from './SidebarNew';
import Link from 'next/link';
interface TreeItemProps {
  item: SidebarItem;
}
const NormalLink = ({ item }: TreeItemProps) => {
    const { pathname } = useRouter();
  return (
    <li>
      <Link
        href={item.path}
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          pathname.includes(item.slug) && 'bg-graydark dark:bg-meta-4'
        }`}
      >
        {item.icon}
        {item.title}
      </Link>
    </li>
  );
};

export default NormalLink;
