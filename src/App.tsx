
import { Route, Routes, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "./Atoms/User/UserAtom";
import Header from "./Componentes/Header/Header";
import Consulta from "./Vistas/Consulta/Consulta";
import Deposito from "./Vistas/Deposito/Deposito";
import Home from "./Vistas/Home/Home";
import Login from "./Vistas/Login/Login";
import Menu from "./Vistas/MenuOperaciones";
import Retiro from "./Vistas/Retiro/Retiro";

function App() {

  const user = useRecoilValue(currentUserAtom);
  const navigate = useNavigate();

  const MenuProtegido = () => {
    if (user) {
      return <Menu />
    } else {
      navigate("/");
      return <Home />;
    }
  }

  const RetiroProtegido = () => {
    if (user) {
      return <Retiro />
    } else {
      navigate("/");
      return <Home />;
    }
  }

  const DepositoProtegido = () => {
    if (user) {
      return <Deposito />
    } else {
      navigate("/");
      return <Home />;
    }
  }

  const ConsultaProtegido = () => {
    if (user) {
      return <Consulta />
    } else {
      navigate("/");
      return <Home />;
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/operaciones" element={<MenuProtegido />} />
        <Route path="/retirar" element={<RetiroProtegido />} />
        <Route path="/depositar" element={<DepositoProtegido />} />
        <Route path="/consultar" element={<ConsultaProtegido />} />
      </Routes>
    </>
  );
}

export default App;

