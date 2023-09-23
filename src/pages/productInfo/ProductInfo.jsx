import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../App.context";
import { useParams } from "react-router-dom";
import { StyledProductInfo } from "./ProductInfo.style";
<<<<<<< HEAD
import InfoSharx from "./components/InfoSharx";
=======
import { Divider, IconButton } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FavoriteIcon from "@mui/icons-material/Favorite";
>>>>>>> 45aff5f9b02b62dce883f3f37935c8e2fc252b36

const ProductInfo = () => {
  const { nomi } = useParams();

  const {
    state: { mahsulotlar, korilganMahsulotlar, mahsulot },
    action: { setKorilganMahsulotlar, mahsulotTanlash, tanlanganmiClick },
  } = useContext(AppContext);

  useEffect(() => {
    setKorilganMahsulotlar([bosilganMahsulot, ...korilganMahsulotlar]);
  }, []);

  const bosilganMahsulot = mahsulotlar.find(
    (mahsulot) => mahsulot.nomi === nomi
  );

  const [activeImage, setActiveImage] = useState(bosilganMahsulot.image[0]);

  return (
    <div>
      <StyledProductInfo>
        <div className="images">
          <img src={activeImage} className="active" alt="" />
          <div className="not-active-images">
            {bosilganMahsulot.image.map((img) => (
              <img
                onClick={() => setActiveImage(img)}
                className={
                  "not-active " + (activeImage === img ? "curr-active" : "")
                }
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
<<<<<<< HEAD
        <div className="info">{bosilganMahsulot.nomi}</div>
        
=======
        <div className="right">
          {/* <div className="info h1">{bosilganMahsulot.nomi}</div> */}
          <div className="info p">{bosilganMahsulot.malumot}</div>
          <div>
            <div className="info s">
              <p>Sotuvchi:</p>
              <a>{bosilganMahsulot.sotuvchi}</a>
            </div>
            <Divider />

            <div className="info n">
              <p>Narxi:</p>
              <p className="narxx">{bosilganMahsulot.narxi}$</p>
            </div>
          </div>
          <div className="muddat">
            <div className="yellow">{bosilganMahsulot.muddat} $ dan</div>
            <p>muddatli to'lov</p>
            <div className="arrow">
              <ArrowForwardIos />
            </div>
          </div>
          <div className="haqida">
            <h1>Mahsulot haqida qisqacha:</h1>
            <div>{bosilganMahsulot.haqida}</div>
          </div>
        </div>
>>>>>>> 45aff5f9b02b62dce883f3f37935c8e2fc252b36
      </StyledProductInfo>
      <InfoSharx/>
    </div>
  );
};

export default ProductInfo;
