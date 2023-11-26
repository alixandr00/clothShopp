import React, { useEffect, useState } from "react";
import { MainTodoClothes } from "./MainTodoClothes";
import { MainModal } from "./moda/MainModal";

export const Main = ({ openSidebar, searchTerm }) => {
  const [openMainModal, setOpenMainModal] = useState(false);
  const [clothes, setClothes] = useState([]);
  const [selectedSizeRange, setSelectedSizeRange] = useState("");

  const openMainModalHandler = () => {
    setOpenMainModal((prev) => !prev);
  };

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem("data")) || [];
    setClothes(parsedData);
  }, []);

  const deleteHandler = (id) => {
    const deleteClothes = clothes.filter((item) => item.id !== id);
    setClothes(deleteClothes);
    localStorage.setItem("data", JSON.stringify(deleteClothes));
  };

  const handleSizeRangeChange = (event) => {
    setSelectedSizeRange(event.target.value);
  };

  const filterClothesBySizeRange = (clothes, sizeRange) => {
    if (!sizeRange) {
      return clothes;
    }
    const [min, max] = sizeRange.split("-").map(Number);
    return clothes.filter((item) => item.size >= min && item.size <= max);
  };

  return (
    <div>
      <select
        className="mt-[7rem] ml-[20rem] appearance-none px-3 py-2 rounded-md border border-gray-300 shadow-sm text-base focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleSizeRangeChange}
        value={selectedSizeRange}
      >
        <option className="py-2">Все размеры</option>
        <option className="py-2">1-10</option>
        <option className="py-2">10-20</option>
        <option className="py-2">20-30</option>
        <option className="py-2">30-40</option>
        <option className="py-2">40-50</option>
      </select>

      {searchTerm.toLowerCase() === "create" && (
        <button
          className="mt-[7rem] ml-[20rem] inline-block outline-none appearance-none px-3 rounded-4 no-underline bg-gray-200 border border-gray-500 shadow-md text-gray-700 text-base font-normal h-10 transition-all duration-150 ease-in-out hover:text-gray-700 hover:bg-white hover:border-gray-600 focus:outline-none focus:shadow-outline"
          onClick={openMainModalHandler}
        >
          добавить одежду
        </button>
      )}
      {openMainModal && (
        <MainModal
          setOpenMainModal={setOpenMainModal}
          setClothes={setClothes}
          clothes={clothes}
          openMainModalHandler={openMainModalHandler}
        />
      )}

      <MainTodoClothes
        searchTerm={searchTerm}
        deleteHandler={deleteHandler}
        openSidebar={openSidebar}
        clothes={filterClothesBySizeRange(clothes, selectedSizeRange)}
      />
    </div>
  );
};
