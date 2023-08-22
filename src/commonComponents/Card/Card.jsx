import React, { useContext, useState } from "react";
import { StyledCard } from "./Card.style";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppContext from "../../App.context";

const Card = ({ mahsulot }) => {
  const {
    action: { mahsulotTanlash, onPlusClick, onMinusClick, tanlanganmiClick },
  } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <StyledCard>
      <li className="mahsulot-card">
        <img
          onClick={() => navigate(`/product-info/${mahsulot.nomi}`)}
          src={mahsulot.image}
          alt=""
        />
        <span className="nomi">{mahsulot.nomi}</span>
        <div className="narxi">${mahsulot.narxi}</div>
        <button
          className="button-bir"
          // disabled={mahsulot.tanlanganmi}
          onClick={(e) => {
            e.stopPropagation();
            mahsulotTanlash(mahsulot);
          }}
        >
          {mahsulot.tanlanganmi === false
            ? "Savatchaga qo'shish"
            : " Savatchadan olish  "}
          <AddShoppingCartIcon />
        </button>

        {mahsulot.tanlanganmi === true && (
          <>
            <div className="mahsulotQoshish">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlusClick(mahsulot);
                }}
              >
                +
              </button>
              <h4>{mahsulot.soni}</h4>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMinusClick(mahsulot);
                }}
              >
                -
              </button>
            </div>
          </>
        )}

        <div
          className="tanlanganmi"
          onClick={(e) => {
            e.stopPropagation();
            tanlanganmiClick(mahsulot);
          }}
        >
          {mahsulot.yoqdimi === true ? (
            <IconButton>
              <FavoriteIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton>
              <HeartBrokenIcon fontSize="large" />
            </IconButton>
          )}
        </div>
      </li>
    </StyledCard>
  );
};

export default Card;
