import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../App.context";
import { useParams } from "react-router-dom";
import { StyledProductInfo } from "./ProductInfo.style";
import InfoSharx from "./components/InfoSharx";

const ProductInfo = () => {
  const { nomi } = useParams();

  const {
    state: { mahsulotlar, korilganMahsulotlar },
    action: { setKorilganMahsulotlar },
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
        <div className="info">{bosilganMahsulot.nomi}</div>
        
      </StyledProductInfo>
      <InfoSharx/>
    </div>
  );
};

export default ProductInfo;
