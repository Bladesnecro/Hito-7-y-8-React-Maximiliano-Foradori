import { useContext, useState } from "react";
import Button from "../components/Button";
import zom2 from "../images/chef2.png";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";

function LoginPage() {
  const {
    handleSubmitLogin,
    error,
    exito,
    email,
    password,
    loading,
  } = useContext(userContext);


  return (
    <form onSubmit={handleSubmitLogin} className="form">
      {(loading && (
        <div className="column">
          <img
            src="../src/images/logo.jpg"
            className="spinner"
            alt="Cargando..."
          />
          <p className="white" style={{ position: "relative", top: "-1rem" }}>
            <strong>{"Invadiendo..."}</strong>
          </p>
        </div>
      )) || (
        <div className="flex">
          <img src={zom2} alt="Italiana" className="Italiana2" />
        </div>
      )}
      <h3>🔓 Iniciar Sesión</h3>
      {error && <p className="alert">{error}</p>}
      {exito && <p className="exito">{exito}</p>}
      <div className="titleForm">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email.value}
          onChange={email.onChange}
          className="flex"
          placeholder="Email"
        />
      </div>
      <div className="titleForm">
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password.value}
          onChange={password.onChange}
          className="flex"
          placeholder="Contraseña"
        />
      </div>
      <div className="column gap">
        <Button type="submit" className="logBtn" buttonText="Iniciar Sesión" />
        <Link to="/register" className="link">
          ¿Olvidaste tu contraseña?
        </Link>
        <Link to="/register" className="link">
          Crea una Cuenta
        </Link>
      </div>
    </form>
  );
}

export default LoginPage;
