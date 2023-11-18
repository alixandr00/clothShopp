import React, { useState } from "react";
import { IconButton } from "@mui/material";
import OpenMenuIcon from "../../assets/icons/menu-alt-03-svgrepo-com.svg";
import CloseMenuIcon from "../../assets/icons/menu-alt-02-svgrepo-com.svg";
import { sidebarData } from "../../utils/constants/sidebarConstant";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const openSidebarHandler = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <div className="fixed ">
      <IconButton
        className={`w-12 h-12 cursor-pointer absolute rounded-[1rem] ${
          openSidebar ? "bg-[#1f2a46] left-[14rem] top-2" : ""
        } `}
        onClick={openSidebarHandler}
      >
        <img src={openSidebar ? OpenMenuIcon : CloseMenuIcon} alt="" />
      </IconButton>

      {openSidebar && (
        <div className="bg-[#1f2a46] w-[15rem] h-[87.5vh] flex flex-col">
          {sidebarData.map((data) => (
            <p className="text-gray-400 hover:text-[#FFFF] cursor-pointer hover:shadow-md pt-8 pb-0 flex justify-center hover:text-xl">
              {data.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
