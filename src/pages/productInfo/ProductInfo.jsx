import React, { useContext } from "react";
import AppContext from "../../App.context";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { nomi } = useParams();

  const {
    state: { mahsulotlar },
  } = useContext(AppContext);
  console.log(nomi);
  console.log(mahsulotlar);

  const bosilganMahsulot = mahsulotlar.find(
    (mahsulot) => mahsulot.nomi === nomi
  );

  return (
    <h1>
      siz tanlagan product bu ---- {bosilganMahsulot.nomi} --{" "}
      {bosilganMahsulot.narxi}
      <img src={bosilganMahsulot.image} alt="" />
    </h1>
  );
};

export default ProductInfo;
