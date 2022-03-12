import { useState } from "react";
import "./styles.scss"

function Retiro() {


  const [montoRetiro, setMontoRetiro] = useState<number>(0);

  const retirar = () => {
    // if (montoRetiro <= currentUser!.balance) {
    //     currentUser!.balance -= montoDeposito;
    //     setMontoRetiro(0);
    // }
  }

  const resetear = () => {
    //setCurrentUser(null);
  }

  return (
    <div className="contenedor">
      <h3 >Retiro</h3>
      <div>
        <label htmlFor="operacion-retiro">Monto: </label>
        <input id="label-monto-retiro" type="number" name="monto-retiro" placeholder="ej. 100" value={montoRetiro || 0} onChange={(e) => { setMontoRetiro(+(e.target.value)) }} />
      </div>
      <br />
      <div className="contenedor__botones">
        <button id="btn-retirar" onClick={() => { retirar() }} type="button" className="contenedor__botones__boton">Retirar</button>
        <button type="button" className="contenedor__botones__boton" onClick={() => resetear()}>Volver al inicio</button>
      </div>

    </div>
  )
}

export default Retiro