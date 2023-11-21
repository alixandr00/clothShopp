import React from "react";

export const UiModal = ({ open, onClose, children, ...rest }) => {
  return (
    <div className={`fixed inset-0  ${open ? "visible" : "invisible"}`}>
      <div
        onClick={onClose}
        className=" fixed inset-0 bg-gray-300 bg-opacity-30 backdrop-blur-sm z-1 flex justify-center items-center"
      >
        <div
          className={` p-8 max-h-screen rounded-md ${
            rest.borderRadius || "rounded"
          } ${rest.backgroundColor || ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
