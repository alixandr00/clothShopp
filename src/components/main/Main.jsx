import React, { useEffect, useState } from "react";
import { MainModal } from "./MainModal";
import { MainTodoClothes } from "./MainTodoClothes";

export const Main = ({ openSidebar }) => {
  const [openMainModal, setOpenMainModal] = useState(false);
  const [clothes, setClothes] = useState([]);

  const openMainModalHandler = () => {
    setOpenMainModal((prev) => !prev);
  };

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem("data")) || [];
    parsedData.forEach((item) => {
      if (item.img instanceof File) {
        item.img = URL.createObjectURL(item.img);
      }
    });
    setClothes(parsedData);
  }, []);

  const deleteHandler = (id) => {
    const deleteClothes = clothes.filter((item) => item.id !== id);
    setClothes(deleteClothes);
    localStorage.setItem("data", JSON.stringify(deleteClothes));
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
      <MainTodoClothes
        deleteHandler={deleteHandler}
        openSidebar={openSidebar}
        clothes={clothes}
      />
    </div>
  );
};
