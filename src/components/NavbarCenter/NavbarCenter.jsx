import React from "react";
import { Navbarstyled } from "./NavbarCenter.style";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useNavigate } from "react-router-dom";
const NavbarCenter = () => {

  const navigate = useNavigate()
  return (
    <div>
      <Navbarstyled>
        <div className="nav-right">
          <FmdGoodOutlinedIcon /> <p className="shahar"> Shahar: <b>Toshkent</b> </p>
          <b onClick={() => navigate("/about")} className="topshirish">Topshirish punkti</b>
        </div>

        <div className="nav-center">
          <p>Buyurtmangizni 1kunda bepul yetkazib beramiz!</p>
        </div>

        <div className="nav-left">
          <p>Savol-javoblar</p>
          <p>Buyurtmalarim </p>
          <p>
            {" "}
            <img src="" alt="" /> O'zbekcha
          </p>
        </div>
      </Navbarstyled>
    </div>
  );
};

export default NavbarCenter;
