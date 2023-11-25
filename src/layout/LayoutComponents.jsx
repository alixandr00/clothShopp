import React, { useState } from "react";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Main } from "../components/main/Main";

export const LayoutComponents = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Main openSidebar={openSidebar} searchTerm={searchTerm} />
    </div>
  );
};
