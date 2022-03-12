
import { Route, Routes } from "react-router-dom";
import Header from "./Componentes/Header/Header";
import Consulta from "./Vistas/Consulta/Consulta";
import Deposito from "./Vistas/Deposito/Deposito";
import Home from "./Vistas/Home/Home";
import Login from "./Vistas/Login/Login";
import Menu from "./Vistas/MenuOperaciones";
import Retiro from "./Vistas/Retiro/Retiro";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/operaciones" element={<Menu />} />
        <Route path="/retirar" element={<Retiro />} />
        <Route path="/depositar" element={<Deposito />} />
        <Route path="/consultar" element={<Consulta />} />
      </Routes>
    </>
  );
}

export default App;

