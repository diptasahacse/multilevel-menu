import React, { ReactNode, useState } from "react";
import { SidebarItem } from "./SidebarNew";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface TreeItemProps {
  item: SidebarItem;
}
const MenuItemNew: React.FC<TreeItemProps> = ({ item }) => {
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
        className={`group  relative flex items-center gap-2.5 rounded-md py-2 px-4 duration-300 ease-in-out hover:bg-gray ${
          pathname === item.path ? "bg-[#62842c] text-white" : "hover:text-[#62842c]"
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

  return (
    <LinkGroup
      activeCondition={pathname === item.path || pathname.includes(item.slug)}
    >
      {(handleClick, open) => {
        return (
          <React.Fragment>
            <div
              className={`group cursor-pointer flex items-center justify-between gap-1 rounded-sm py-2 px-4  duration-300 ease-in-out hover:text-[#62842c]  ${
                (pathname === item.path || pathname.includes(item.slug)) &&
                "text-[#62842c] "
              }`}
              onClick={(e) => {
                handleClick();
              }}
            >
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.title}</span>
              </div>
              <span className={`${open && "rotate-90"}`}>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
              </span>
            </div>
            {/* <!-- Dropdown Menu Start --> */}
            <ul
              className={` flex flex-col gap-1 pl-2 ${
                !open && "hidden"
              }`}
            >
              {item.dropdownItems.map((item: SidebarItem, index) =>
                item.dropdownItems.length > 0 ? (
                  <DropdownLink key={index} item={item} />
                ) : (
                  <NormalLink key={index} item={item} />
                )
              )}
            </ul>
            {/* <!-- Dropdown Menu End --> */}
          </React.Fragment>
        );
      }}
    </LinkGroup>
  );
};

interface LinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

const LinkGroup = ({
  children,
  activeCondition,
}: LinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);
  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};
export default MenuItemNew;
