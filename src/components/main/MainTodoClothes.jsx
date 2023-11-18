import React from "react";

export const MainTodoClothes = ({ clothes }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-8 ml-[18rem]">
      {clothes?.map((data) => (
        <div
          key={data.id}
          className="bg-white w-[15rem] h-[17rem] flex flex-col dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
        >
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
    </div>
  );
};
