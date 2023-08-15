import React, { ReactNode, useState } from "react";
import { SidebarItem } from "./Sidebar";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface TreeItemProps {
  item: SidebarItem;
}
const MenuItem: React.FC<TreeItemProps> = ({ item }) => {
  return (
    <>
      {item.dropdownItems.length === 0 ? (
        <NormalLink item={item} />
      ) : (
        <DropdownLink item={item} />
      )}
    </>
  );
};
const NormalLink = ({ item }: TreeItemProps) => {
  const { pathname } = useRouter();
  return (
    <li>
      <Link
        href={item.path}
        className={`group  relative flex transition-all items-center gap-2 rounded-lg py-2 px-4 duration-300 ease-in-out hover:bg-gray ${
          pathname === item.path
            ? "bg-[#62842c] text-white"
            : "hover:text-[#62842c]"
        }`}
      >
        <FontAwesomeIcon icon={item.icon} />
        {item.title}
      </Link>
    </li>
  );
};

const DropdownLink = ({ item }: TreeItemProps) => {
  const { pathname } = useRouter();
  const isDropdownOpen = (
    pathname === item.path || // Check if the current route matches the item's path
    item.dropdownItems.some(subItem => pathname.includes(subItem.path)) // Check if any nested dropdown item's path matches the current route
  );
  return (
    <LinkGroup activeCondition={isDropdownOpen}>
      {(handleClick, open) => {
        return (
          <>
            <div
              className={`group cursor-pointer flex items-center justify-between gap-1 rounded-sm py-2 px-4  duration-300 ease-in-out hover:text-[#62842c]  ${
                (isDropdownOpen) && "text-[#62842c] "
              }`}
              onClick={(e) => {
                handleClick();
              }}
            >
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.title}</span>
              </div>
              <span className={ ` transition-all ${open ? "rotate-90" : ""}`}>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
              </span>
            </div>
            {/* <!-- Dropdown Menu Start --> */}
            <ul className={` flex flex-col gap-1 pl-3 ${!open ? "hidden" : ""}`}>
              {item.dropdownItems.map((item: SidebarItem, index) =>
                item.dropdownItems.length > 0 ? (
                  <DropdownLink key={index} item={item} />
                ) : (
                  <NormalLink key={index} item={item} />
                )
              )}
            </ul>
            {/* <!-- Dropdown Menu End --> */}
          </>
        );
      }}
    </LinkGroup>
  );
};

interface LinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

const LinkGroup = ({ children, activeCondition }: LinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);
  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};
export default MenuItem;
