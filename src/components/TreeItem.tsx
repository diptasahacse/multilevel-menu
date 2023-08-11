// TreeItem.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { cloneElement, useEffect, useState } from "react";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { TreeItemData } from "./Layouts/Sidebar";
import { useRouter } from "next/router";

interface TreeItemProps {
  item: TreeItemData;
}

const TreeItem: React.FC<TreeItemProps> = ({ item }) => {

  const {asPath} = useRouter()
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
  // Use useEffect to update the expansion state when the pathname changes
  useEffect(() => {
    if (hasChildren && item.link === asPath) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [asPath, hasChildren, item.link]);
  return (
    <>
      {hasChildren ? (
        <div
          className={`${expanded ? "text-[#62842c]" : ""} group hover:bg-[#62842c] rounded-lg flex items-center justify-between py-2.5 px-3 my-1 cursor-pointer`}
          onClick={() => setExpanded((state) => !state)}
        >
          <p className="flex gap-2 items-center group-hover:text-white">
            {item?.icon && <span>{Icon}</span>}
            <span>{item.label}</span>
          </p>
          <span>
            {expanded
              ? item.children.length > 0 && (
                  <span className={` text-xs group-hover:text-white`}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                )
              : item.children.length > 0 && (
                  <span className=" text-xs group-hover:text-white">
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
