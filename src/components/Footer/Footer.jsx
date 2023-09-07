import React, { useContext } from "react";
import AppContext from "../../App.context";
import Card from "../../commonComponents/Card/Card";
import { KorilganStyled } from "./Korilgan.style";

const Footer = () => {
  const {
    state: { korilganMahsulotlar },
  } = useContext(AppContext);
  return (
    <KorilganStyled>
      <div>   <h1>Oxirgi ko'rilgan mahsulotlar</h1>   </div>

      <div className="korilgan">
      {korilganMahsulotlar.map((mahsulot) => (
        <Card mahsulot={mahsulot} />
      ))}
      </div>
    </KorilganStyled>

  );
};

export default Footer;
