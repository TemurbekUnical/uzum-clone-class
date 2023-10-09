import React, { useContext } from "react";
import AppContext from "../../App.context";
import Card from "../../commonComponents/Card/Card";
import { LikeStyled } from "./Liked.styled";

const LikedProducts = () => {
  const {
    state: { mahsulotlar },
  } = useContext(AppContext);
  return (
    <LikeStyled>
      {mahsulotlar
        .filter((mahsulot) => mahsulot.yoqdimi === true)
        .map((mahsulot) => (
          <Card mahsulot={mahsulot} />
        ))}
    </LikeStyled>

  );
};

export default LikedProducts;
