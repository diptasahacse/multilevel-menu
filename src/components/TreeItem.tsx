// TreeItem.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { cloneElement, useState } from "react";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { TreeItemData } from "@/pages";
import Image from "next/image";
import Link from "next/link";

interface TreeItemProps {
  item: TreeItemData;
}

const TreeItem: React.FC<TreeItemProps> = ({ item }) => {
  const hasChildren = item.children.length > 0;
  const [expanded, setExpanded] = useState(false);

  let Icon = null;
  if (item?.icon) {
    Icon = cloneElement(item.icon, {
      className: " group-hover:text-white",
      height: "18",
      width: "18",
    });
  }
  return (
    <>
      {hasChildren ? (
        <div
          className="group hover:bg-[#62842c] rounded-lg flex items-center justify-between py-2.5 px-3 my-1 cursor-pointer"
          onClick={() => setExpanded((state) => !state)}
        >
          <p className="flex gap-2 items-center group-hover:text-white">
            {item?.icon && <span>{Icon}</span>}
            <span>{item.label}</span>
          </p>
          <span>
            {expanded
              ? item.children.length > 0 && (
                  <span className={`hover:text-red-800 text-red-800 text-xs`}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                )
              : item.children.length > 0 && (
                  <span className="hover:text-red-800 text-xs">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                )}
          </span>
        </div>
      ) : (
        item.link && (
          <Link
            href={item.link}
            className=" flex hover:bg-[#62842c] rounded-lg group justify-between py-2.5 px-3 my-1 cursor-pointer"
          >
            <p className="flex items-center gap-2 group-hover:text-white">
              {item?.icon && <span>{Icon}</span>}
              <span>{item.label}</span>
            </p>
          </Link>
        )
      )}
      {expanded && (
        <div className="ml-6">
          {item.children.map((child) => (
            <TreeItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </>
  );
};

export default TreeItem;
