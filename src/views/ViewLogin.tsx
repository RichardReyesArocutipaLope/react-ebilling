import logoSfact from "../assets/logosfact.png";
import { idioma } from "../common/interfaces/languages";
import { MainWrapper } from "../components/custom/MainWrapper";
import { Login } from "../components/reactStrap/Login";
import "./ViewLogin.css";

export const ViewLogin = () => {
  const pe: idioma = {
    user: "Usuario",
    password: "Contraseña",
    submit: "Ingresar",
  };

  const us: idioma = {
    user: "Username",
    password: "Password",
    submit: "Login",
  };

  const textLogin = {
    pe,
    us,
  };

  const iso: string = "pe";
  return (
    <MainWrapper>
      <div className="login__container">
        <Login logo={logoSfact} text={textLogin[iso]} />
      </div>
    </MainWrapper>
  );
};
