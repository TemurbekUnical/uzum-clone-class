import "react-toastify/dist/ReactToastify.css";
import { AppStyled } from "./App.style";  
import Navbar from "./components/Navbar/Navbar";
import NavbarCenter from "./components/NavbarCenter/NavbarCenter";
import Savatcha from "./components/savatcha/Savatcha";
import PagesRoutes from "./routes/Routes";
import { useContext } from "react";
import AppContext from "./App.context";
import Korilgan from "./components/Korilgan/Korilgan";
import FooterTitle from "./components/Footer/FooterTitle";

const Layout = () => {
  const {
    action: { mahsulotlarniIzlash, savatchaAlmashtirish },
  } = useContext(AppContext);

  return (
    <>
      <AppStyled className="container">
        <NavbarCenter />
        <Navbar
          mahsulotlarniIzlash={mahsulotlarniIzlash}
          savatchaAlmashtirish={savatchaAlmashtirish}
        />
        <Savatcha />
        <PagesRoutes />
       <Korilgan/>
       <FooterTitle/>
      </AppStyled>
    </>
  );
};

export default Layout;
