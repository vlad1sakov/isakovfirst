import logo from "../../img/logo.svg";
import "./register.css";
const Register = () => {
  return (
    <>
      <div class="registration">
        <form class="registration-form" action="/Serviceclassifier">
          <div class="registration-form-logo">
            <img class="registration-form-logo-item" src={logo} alt="logo" />
          </div>
          <div class="registration-form-container">
            <input type="email" placeholder="Электронная почта" name="uname" id="input-id" required/>
            <input type="password" placeholder="Пароль" name="psw" required />
            <button class="registration-form-submit" type="submit">Войти</button>
          </div>
        </form>
      </div>
    </>
  );
};
export { Register };
