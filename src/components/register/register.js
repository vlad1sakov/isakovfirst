import logo from "../img/logo.svg";
import "./register.css";
const Register = () => {
  return (
    <>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body class="registration">
          <form class="registration-form" action="/Serviceclassifier">
            <div class="registration-form-logo">
              <img class="registration-form-logo-item" src={logo} alt="logo" />
            </div>
            <div class="registration-form-container">
              <input
                type="email"
                placeholder="Электронная почта"
                name="uname"
                id="input-id"
                required
              />
              <input type="password" placeholder="Пароль" name="psw" required />
              <button class="registration-form-submit" type="submit">
                Войти
              </button>
            </div>
          </form>
        </body>
      </html>
    </>
  );
};
export { Register };
