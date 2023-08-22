import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
