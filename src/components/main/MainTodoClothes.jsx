import React, { useState } from "react";
import DeleteIcon from "../../assets/icons/deleteicon.svg";
import { MainDeleteModal } from "./moda/MainDeleteModal";

export const MainTodoClothes = ({
  clothes,
  openSidebar,
  deleteHandler,
  searchTerm,
}) => {
  const [openMainDeleteModal, setOpenMainDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const openDeleteModalHandler = (id) => {
    setDeleteItemId(id);
    setOpenMainDeleteModal(true);
  };

  const closeDeleteModalHandler = () => {
    setDeleteItemId(null);
    setOpenMainDeleteModal(false);
  };

  const confirmDeleteHandler = () => {
    if (deleteItemId) {
      deleteHandler(deleteItemId);
      setDeleteItemId(null);
      setOpenMainDeleteModal(false);
    }
  };

  return (
    <div
      className={`${
        searchTerm !== "create" ? "mt-[2rem]" : "mt-8"
      }  flex flex-wrap gap-8 ${
        openSidebar ? "ml-[18rem]" : "ml-[4rem]"
      } transition-ml duration-700 `}
    >
      {clothes?.map((data) => (
        <div
          key={data.id}
          className="bg-white w-[15rem] h-[17rem] flex flex-col dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
        >
          <img
            className="w-[1.5rem] h-[1.5rem] absolute left-[12.3rem] cursor-pointer"
            src={DeleteIcon}
            alt=""
            onClick={() => openDeleteModalHandler(data.id)}
          />
          <img
            className="w-[14rem] h-[22vh] object-cover mx-auto mb-4 rounded-lg"
            src={data.img}
            alt="Clothing Preview"
          />

          <div>
            <p className="text-white font-bold mb-2 ml-3">{data.name}</p>
            <div className="flex justify-around">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Price: {data.price}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Size: {data.size}
              </p>
            </div>
          </div>
        </div>
      ))}
      {openMainDeleteModal && (
        <MainDeleteModal
          openDeleteModalHandler={openDeleteModalHandler}
          closeDeleteModalHandler={closeDeleteModalHandler}
          deleteHandler={confirmDeleteHandler}
        />
      )}
    </div>
  );
};
