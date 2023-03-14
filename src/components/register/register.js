import logo from "../../img/logo.svg";
import "./register.css";
const Register = () => {
  return (
    <>
      <div className="registration">
        <form className="registration-form" action="/Serviceclassifier">
          <div className="registration-form-logo">
            <img className="registration-form-logo-item" src={logo} alt="logo" />
          </div>
          <div className="registration-form-container">
            <input type="email" placeholder="Электронная почта" name="uname" id="input-id" required/>
            <input type="password" placeholder="Пароль" name="psw" required />
            <button className="registration-form-submit" type="submit">Войти</button>
          </div>
        </form>
      </div>
    </>
  );
};
export { Register };
