import { ArrowForwardIos } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../App.context";
import InfoSharx from "./components/InfoSharx";
import { StyledProductInfo } from "./ProductInfo.style";

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
      </StyledProductInfo >
      <InfoSharx />
    </div >
  );
};

export default ProductInfo;
