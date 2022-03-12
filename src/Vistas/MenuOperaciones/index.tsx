
import { useNavigate } from "react-router-dom";
import "./styles.scss"

function Menu() {

  const navigate = useNavigate();

  function irAFuncionDeRetiro(): void {
    navigate("/retiro");
  }
  const irAFuncionDeDeposito = () => {
    navigate("/deposito");
  }

  const irAFuncionDeConsulta = () => {
    navigate("/consulta");
  }

  return (
    <>
      <div className="contenedor-operaciones" id="contenedor-operaciones" >
        <h3 >Operaciones</h3>
        <div>
          <button id="boton-retirar" className="contenedor-operaciones__boton" onClick={() => irAFuncionDeRetiro()}>
            Retirar
          </button>
          <button id="boton-depositar" className="contenedor-operaciones__boton" onClick={() => irAFuncionDeDeposito()}>
            Depositar
          </button>
          <button id="boton-consultar" className="contenedor-operaciones__boton" type="button"
            onClick={() => irAFuncionDeConsulta()}>
            Consultar
          </button>
        </div>
      </div>
    </>
  )
}

export default Menu;