import React from "react";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Main } from "../components/main/Main";

export const LayoutComponents = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};
