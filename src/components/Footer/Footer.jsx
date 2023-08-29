import React, { useContext } from "react";
import AppContext from "../../App.context";
import Card from "../../commonComponents/Card/Card";

const Footer = () => {
  const {
    state: { korilganMahsulotlar },
  } = useContext(AppContext);
  return (
    <div>
      <h1>Oxirgi ko'rilgan mahsulotlar</h1>
      {korilganMahsulotlar.map((mahsulot) => (
        <Card mahsulot={mahsulot} />
      ))}
    </div>
  );
};

export default Footer;
