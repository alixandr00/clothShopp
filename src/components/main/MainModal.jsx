import React, { useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";

export const MainModal = ({
  openMainModalHandler,
  setClothes,
  clothes,
  setOpenMainModal,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
  };

  const submitHandler = () => {
    const data = {
      id: uuidv4(),
      name: nameValue,
      price: `${priceValue} com`,
      size: sizeValue,
      img: selectedFile ? URL.createObjectURL(selectedFile) : null,
    };
    const updatedClothes = [...clothes, data];
    setClothes(updatedClothes);
    localStorage.setItem("data", JSON.stringify(updatedClothes));

    setNameValue("");
    setPriceValue("");
    setSizeValue("");
    setSelectedFile(null);
    setOpenMainModal(false);
  };

  return (
    <div className="fixed top-0 flex justify-center items-center w-screen h-screen z-50">
      <div className="w-96 h-[61vh] dark:bg-gray-800 rounded-xl p-4 relative">
        <div className="w-full flex justify-end ">
          <IconButton onClick={openMainModalHandler}>
            <CloseIcon />
          </IconButton>
          {selectedFile && (
            <IconButton
              className="absolute top-[16.3rem] right-14 "
              onClick={clearSelectedFile}
            >
              <CloseIcon />
            </IconButton>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            id="first_name"
            class="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="пишите название"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            required
          />
          <input
            id="visitors"
            type="number"
            className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="пишите цену"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
            required
          />
          <input
            id="visitors"
            type="number"
            className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="пишите размер"
            value={sizeValue}
            onChange={(e) => setSizeValue(e.target.value)}
            required
          />
        </div>
        {selectedFile ? (
          <div className="flex justify-center items-center ml-12 mt-10 w-[16rem] h-[8rem] rounded-[1rem]">
            <img
              className="w-full h-full rounded-[0.5rem]"
              src={URL.createObjectURL(selectedFile)}
              alt="Selected Preview"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center mt-10">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800
dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center p-16 ">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2-2"
                  />
                </svg>
                <p className="text-white">Загрузить фото</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}
        <div className="w-full mt-4 flex justify-end">
          <button
            onClick={openMainModalHandler}
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={submitHandler}
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
