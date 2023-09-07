import { Route, Routes } from "react-router-dom";
import ProductInfo from "../pages/productInfo/ProductInfo";
import LikedProducts from "./../pages/likedProducts/LikedProducts";
import Mahsulotlar from "./../pages/mahsulotlar/Mahsulotlar";
import Profile from "../pages/profile/Profile";

const router = [
  {
    path: "/",
    element: <Mahsulotlar />,
  },
  {
    path: "/product-info/:nomi",
    element: <ProductInfo />,
  },
  {
    path: "/liked-products",
    element: <LikedProducts />,
  },
  {
    path: "/profile/*",
    element: <Profile />,
  },
  // shu joyga yozamiz login ni page sini
];
export default function PagesRoutes() {
  return (
    <Routes>
      {router.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
