import { Divider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { TopshirishPunktiStyled } from "./TopshirishPunkti.style";
import Punkt from "./components/Punkt";
import TopshirishPunktiSidebar from "./components/TopshirishPunktiSidebar";
import Vakansiya from "./components/Vakansiya";

const TopshirishPunkti = () => {
  return (
    <TopshirishPunktiStyled>

       
        <TopshirishPunktiSidebar />
        <Routes>
        <Route path="delivery-points" element={<Punkt />} />
        <Route path="careers" element={<Vakansiya />} />
      </Routes>
    </TopshirishPunktiStyled>
  );
};

export default TopshirishPunkti;
