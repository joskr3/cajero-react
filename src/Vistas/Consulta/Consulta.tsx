import "./styles.scss";

function Consulta() {


  const resetear = () => {
    // setCurrentUser(null);
  }

  return (
    <>
      <div className="contenedor">
        <h3>Resultado de la consulta</h3>
        <p>Saldo:  <span id="resultado-consulta" /></p>
        <button type="button" className="resetear" onClick={() => resetear()}>Volver al inicio</button>
      </div>
    </>
  )
}

export default Consulta