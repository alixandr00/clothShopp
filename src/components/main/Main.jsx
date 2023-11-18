import React, { useState } from "react";
import { MainModal } from "./MainModal";
import { MainTodoClothes } from "./MainTodoClothes";

export const Main = () => {
  const [openMainModal, setOpenMainModal] = useState(false);
  const [clothes, setClothes] = useState([]);

  const openMainModalHandler = () => {
    setOpenMainModal((prev) => !prev);
  };

  return (
    <div>
      <button
        className="ml-[20rem] inline-block outline-none appearance-none px-3 rounded-4 no-underline bg-gray-200 border border-gray-500 shadow-md text-gray-700 text-base font-normal h-10 transition-all duration-150 ease-in-out hover:text-gray-700 hover:bg-white hover:border-gray-600 focus:outline-none focus:shadow-outline"
        onClick={openMainModalHandler}
      >
        добавить одежду
      </button>
      {openMainModal && (
        <MainModal
          setOpenMainModal={setOpenMainModal}
          setClothes={setClothes}
          clothes={clothes}
          openMainModalHandler={openMainModalHandler}
        />
      )}
      <MainTodoClothes clothes={clothes} />
    </div>
  );
};
