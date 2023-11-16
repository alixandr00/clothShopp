import React, { useState } from "react";
import { MainModal } from "./MainModal";

export const Main = () => {
  const [openMainModal, setOpenMainModal] = useState(false);

  const openMainModalHandler = () => {
    setOpenMainModal((prev) => !prev);
  };

  return (
    <div>
      <button
        className="ml-20 inline-block outline-none appearance-none px-3 rounded-4 no-underline bg-gray-200 border border-gray-500 shadow-md text-gray-700 text-base font-normal h-10 transition-all duration-150 ease-in-out hover:text-gray-700 hover:bg-white hover:border-gray-600 focus:outline-none focus:shadow-outline"
        onClick={openMainModalHandler}
      >
        добавить одежду
      </button>
      {openMainModal && (
        <MainModal openMainModalHandler={openMainModalHandler} />
      )}
    </div>
  );
};
