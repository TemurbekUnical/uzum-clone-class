import { Divider } from "@mui/material";
import { default as React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../App.context";
import { StyledProductInfo } from "./ProductInfo.style";
import InfoSharx from "./components/InfoSharx";

const ProductInfo = () => {
  const { nomi } = useParams();

  const {
    state: { mahsulotlar, korilganMahsulotlar,},
    action: { setKorilganMahsulotlar, },
  } = useContext(AppContext);

  useEffect(() => {
    setKorilganMahsulotlar([bosilganMahsulot, ...korilganMahsulotlar]);
  }, []);

  const bosilganMahsulot = mahsulotlar.find(
    (mahsulot) => mahsulot.nomi === nomi
  );

  const [activeImage, setActiveImage] = useState(bosilganMahsulot.image[1]);

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
        </div>
      </StyledProductInfo>
      <InfoSharx bosilganMahsulot={bosilganMahsulot} />
    </div>
  );
};

export default ProductInfo;
