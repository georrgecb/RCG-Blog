import React from "react";
import data from "./header.data";
import Link from "next/link";

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const MobileHeader = ({ isOpen, setOpen }) => {
  return (
    <ProSidebar
      collapsed={false}
      toggled={isOpen}
      breakPoint="md"
      onToggle={() => setOpen(!isOpen)}
    >
      <Menu className="h-full mt-20 flex flex-col justify-start items-start">
        {data.map((item, index) => (
          <MenuItem key={index}>
            <Link key={index} href={item.path}>
              <p className="text-white font-extrabold py-3 hover:text-red-700 duration-300 text-2xl">
                {item.label}
              </p>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </ProSidebar>
  );
};

export default MobileHeader;
