import React, { useContext } from "react";
import AppContext from "../../App.context";
import Card from "../../commonComponents/Card/Card";
import { SavatchaStyled } from "./Savatcha.style";
import SavatchaSidebar from "./SavatchaSidebar";

const Savatcha = () => {
  const {
    state: { obshiySumma, mahsulotlarsoni, tanlanganMahsulotlar },
  } = useContext(AppContext);
  return (
    <SavatchaStyled>
      <SavatchaSidebar>
        <div className="savatcha-malumot">
          <h3>Savatcha</h3>
          <h4>Umumiy maxsulotlar hisobi: ${obshiySumma}</h4>
          <h4>Umimiy mahsulotlar: {mahsulotlarsoni}</h4>
        </div>

        <div className="savatchadagi-mahsulotlar">
          <ul className="mahsulotlar-container">
            {tanlanganMahsulotlar.map((mahsulot) => (
              <Card key={mahsulot.nomi} mahsulot={mahsulot} />
            ))}
          </ul>
        </div>
      </SavatchaSidebar>
    </SavatchaStyled>
  );
};

export default Savatcha;
