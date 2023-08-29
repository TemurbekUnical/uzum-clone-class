import "react-toastify/dist/ReactToastify.css";
import { AppStyled } from "./App.style";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NavbarCenter from "./components/NavbarCenter/NavbarCenter";
import Savatcha from "./components/savatcha/Savatcha";
import PagesRoutes from "./routes/Routes";
import { useContext } from "react";
import AppContext from "./App.context";

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
        <Footer />
      </AppStyled>
    </>
  );
};

export default Layout;
