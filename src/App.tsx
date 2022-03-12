import './App.scss';
import { useState } from 'react';
import { IUser } from './Interfaces/IUser';
import { arrayUsuarios } from './db';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [irAlRetiro, setIrAlRetiro] = useState(false);
  const [irAlDeposito, setIrAlDeposito] = useState(false);
  const [irAlConsulta, setIrAlConsulta] = useState(false);
  const [montoRetiro, setMontoRetiro] = useState<number>(0);
  const [montoDeposito, setMontoDeposito] = useState<number>(0);

  function irAFuncionDeRetiro(): void {
    setIrAlRetiro(true);
    setIrAlConsulta(false);
    setIrAlDeposito(false);
  }
  const irAFuncionDeDeposito = () => {
    setIrAlDeposito(true);
    setIrAlRetiro(false);
    setIrAlConsulta(false);
  }

  const irAFuncionDeConsulta = () => {
    setIrAlConsulta(true);
    setIrAlRetiro(false);
    setIrAlDeposito(false);
  }

  const resetear = () => {
    setCurrentUser(null);
  }

  const depositar = () => {
    if (montoDeposito > 0) {
      currentUser!.balance += montoDeposito;
      setMontoDeposito(0);
    }
  }

  const retirar = () => {
    if (montoRetiro <= currentUser!.balance) {
      currentUser!.balance -= montoDeposito;
      setMontoRetiro(0);
    }
  }

  function iniciarSesion() {
    const userFound = arrayUsuarios.find(user => user.email === email && user.password === password);
    setCurrentUser(userFound || null);
    return userFound
  }

  return (
    <>
      <section className="cabecera">
        <div className="cebecera__cuerpo">
          <p className="cabecera__cuerpo__titulo">
            Sistema de cajero
          </p>
        </div>
      </section>
      <div id="alerta"></div>
      {(currentUser === null) ? (<>
        <section className="login" id="login">
          <div className="login__contenedor">
            <input className="login__contenedor__input" id="label-email-usuario" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="login__contenedor">
            <input id="label-password" className="login__contenedor__input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type='button' className="login__button" onClick={iniciarSesion} style={{ cursor: "pointer" }}>
            Login
          </button>
        </section>
      </>) : (null)}
      {(currentUser !== null) && (
        <section id="contenedor-info-usuario" className="contenedor-info">
          <div className=" is-centered contenedor-info__centrado">
            <div id="datos-usuario" className="contenedor-info__centrado__datos" >
              <h1 >Bienvenido, <span id="nombre-usuario">{currentUser.nombre}</span></h1>
              <p >Nombre de usuario: <span id="username-usuario">{currentUser.usuario}</span> </p>
              <p >Email: <span id="email-usuario">{currentUser.email}</span></p>
            </div>
            <div className="my-2" id="contenedor-operaciones" >
              <h3 className="contenedor-operaciones">Operaciones</h3>
              <div>
                <button id="boton-retirar" className="login__button" onClick={() => irAFuncionDeRetiro()}>
                  Retirar
                </button>
                <button id="boton-depositar" className="login__button" onClick={() => irAFuncionDeDeposito()}>
                  Depositar
                </button>
                <button id="boton-consultar" className="login__button" type="button"
                  onClick={() => irAFuncionDeConsulta()}>
                  Consultar
                </button>
              </div>
            </div>
            <div className="contenedor-ejecutar-operaciones" >
              {irAlRetiro && (
                <div className="contenedor-retiro">
                  <h3 >Retiro</h3>
                  <div>
                    <label htmlFor="operacion-retiro">Monto: </label>
                    <input id="label-monto-retiro" type="number" name="monto-retiro" placeholder="ej. 100" value={montoRetiro || 0} onChange={(e) => { setMontoRetiro(+(e.target.value)) }} />
                  </div>
                  <br />
                  <button id="btn-retirar" onClick={() => { retirar() }} type="button">Retirar</button>
                  <button type="button" className="resetear-evento " onClick={() => resetear()}>Volver al inicio</button>
                </div>
              )}
              {irAlDeposito && (
                <div id="elemento1" className=" contenedor-deposito       mostrar">
                  <h3>Deposito</h3>
                  <label htmlFor="monto-deposito">Monto: </label>
                  <input id="operacion-deposito" type="number" name="monto-deposito" placeholder="ej. 100" value={montoDeposito || 0} onChange={(e) => { setMontoDeposito(+(e.target.value)) }} />
                  <br />
                  <button id="btn-depositar" type="button" onClick={() => depositar()}>Depositar</button>
                  <button type="button" className="resetear" onClick={() => resetear()}>Volver al inicio</button>
                </div>
              )}
              {irAlConsulta && (
                <div className="contenedor-consulta mostrar">
                  <h3>Consulta</h3>
                  <div className="contenedor-resultado-consulta mostrar">
                    <h3>Resultado de la consulta</h3>
                    <p>Saldo: {currentUser.balance} <span id="resultado-consulta" /></p>
                    <button type="button" className="resetear" onClick={() => resetear()}>Volver al inicio</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default App;

