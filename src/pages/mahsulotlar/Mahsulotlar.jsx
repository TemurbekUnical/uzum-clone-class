import React, { useContext } from "react";
import AppContext from "../../App.context";
import Card from "../../commonComponents/Card/Card";
import { MahsulotlarStyled } from "./Mahsulotlar.style";
import Slayd from "./../../components/Slayd/Slayd";

const Mahsulotlar = () => {
  const {
    state: { mahsulotlar, kiritilganText },
  } = useContext(AppContext);
  return (
    <MahsulotlarStyled>
      <Slayd />
      <ul className="mahsulotlar-container">
        {mahsulotlar.filter((maxsulot) =>
          maxsulot.nomi.toLowerCase().includes(kiritilganText.toLowerCase())
        ).map((mahsulot) => (
          <Card key={mahsulot.nomi} mahsulot={mahsulot} />
        ))}
      </ul>
    </MahsulotlarStyled>
  );
};

export default Mahsulotlar;
