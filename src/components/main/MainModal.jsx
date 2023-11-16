import React from "react";
import ExitIcon from "../../assets/icons/logout-svgrepo-com.svg";

export const MainModal = ({ openMainModalHandler }) => {
  return (
    <div className="fixed top-0 flex justify-center items-center w-screen h-screen ">
      <div className="w-96 h-[60vh] bg-[#38386d] rounded-xl p-4 relative">
        <div className="w-full flex justify-end">
          <img
            onClick={openMainModalHandler}
            className="cursor-pointer"
            src={ExitIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
