import { Route, Switch } from "react-router-dom";
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
    <Header/>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/operaciones">
          <Menu />
        </Route>
        <Route path="/retirar">
          <Retiro />
        </Route>
        <Route path="/depositar">
          <Deposito />
        </Route>
        <Route path="/consultar">
          <Consulta />
        </Route>
      </Switch>
    </>
  );
}

export default App;

