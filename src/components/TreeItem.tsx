// TreeItem.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
    const hasChildren = item.children.length > 0
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {hasChildren ? (
        <div
          className=" flex justify-between py-2.5 px-6 cursor-pointer"
          onClick={toggleExpand}
        >
          <p className="flex gap-2">
            {item?.icon && (
              <Image height={20} width={20} alt="Icon" src={item?.icon} />
            )}
            <span>{item.label}</span>
          </p>
          <span>
            {expanded
              ? item.children.length > 0 && (
                  <FontAwesomeIcon icon={faChevronDown} />
                )
              : item.children.length > 0 && (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}
          </span>
        </div>
      ) : (
        item.link && (
          <Link
            href={item.link}
            className=" flex justify-between py-2.5 px-6 cursor-pointer"
          >
            <p className="flex gap-2">
              {item?.icon && (
                <Image height={20} width={20} alt="Icon" src={item?.icon} />
              )}
              <span>{item.label}</span>
            </p>
            <span>
              {expanded
                ? item.children.length > 0 && (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )
                : item.children.length > 0 && (
                    <FontAwesomeIcon icon={faChevronRight} />
                  )}
            </span>
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
