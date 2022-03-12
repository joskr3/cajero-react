import { useState } from "react";
import "./styles.scss";
export default function Deposito() {
  const [montoDeposito, setMontoDeposito] = useState<number>(0);

  const resetear = () => {
    //setCurrentUser(null);
  }


  const depositar = () => {
    if (montoDeposito > 0) {
      // currentUser!.balance += montoDeposito;
      setMontoDeposito(0);
    }
  }

  return (
    <div id="elemento1" className=" contenedor">
      <h3>Deposito</h3>
      <label htmlFor="monto-deposito">Monto: </label>
      <input id="operacion-deposito" type="number" name="monto-deposito" placeholder="ej. 100" value={montoDeposito || 0} onChange={(e) => { setMontoDeposito(+(e.target.value)) }} />
      <br />
      <button id="btn-depositar" type="button" onClick={() => depositar()}>Depositar</button>
      <button type="button" className="resetear" onClick={() => resetear()}>Volver al inicio</button>
    </div>
  )
}
