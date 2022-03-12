import { useState } from 'react'
import "./styles.scss"
import { arrayUsuarios } from '../../db';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function iniciarSesion() {
    const userFound = arrayUsuarios.find(user => user.email === email && user.password === password);
    //setCurrentUser(userFound || null);
    return userFound
  }

  return (
    <section className="login" id="login">
      <div className="login__contenedor">
        <input className="login__contenedor__input" id="label-email-usuario" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="login__contenedor">
        <input id="label-password" className="login__contenedor__input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type='button' className="login__button" onClick={iniciarSesion} >
        Login
      </button>
    </section>
  )
}

export default Login