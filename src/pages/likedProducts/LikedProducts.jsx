import React, { useContext } from "react";
import AppContext from "../../App.context";
import Card from "../../commonComponents/Card/Card";

const LikedProducts = () => {
  const {
    state: { mahsulotlar },
  } = useContext(AppContext);
  return (
    <div>
      {mahsulotlar
        .filter((mahsulot) => mahsulot.yoqdimi === true)
        .map((mahsulot) => (
          <Card mahsulot={mahsulot} />
        ))}
    </div>
  );
};

export default LikedProducts;
