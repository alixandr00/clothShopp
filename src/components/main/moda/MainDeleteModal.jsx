import React from "react";

export const MainDeleteModal = ({
  openDeleteModalHandler,
  closeDeleteModalHandler,
  deleteHandler,
}) => {
  return (
    <div className="fixed w-[100%] top-0 left-0 flex justify-center items-center h-[100%]">
      <div className="w-[20rem] h-[8rem] z-50 dark:bg-gray-800 rounded-xl flex flex-col justify-center items-center ">
        <p className="text-white">Вы точно хотите удалить</p>
        <div className="w-full mt-4 flex justify-center">
          <button
            onClick={closeDeleteModalHandler}
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Назад
          </button>
          <button
            onClick={deleteHandler}
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Да
          </button>
        </div>
      </div>
    </div>
  );
};
