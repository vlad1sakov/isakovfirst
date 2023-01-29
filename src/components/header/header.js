import "./header.css"
import avatar from "../img/avatar.svg"
const Header = () => {
  return(
  <>
    <header>
    <nav>
      <ul class='navigation'>
        <li><a class="navigation-logo" href="/Serviceclassifier">DemoPort</a></li>
        <li><a href="/Serviceclassifier">Классификатор услуг</a></li>
        <li><a href="Servicearchive">Архив услуг</a></li>
        <li><a href="/Users">Пользователи</a></li>
        <li><a href="/Administration">Администрирование</a></li>
      </ul>
      <ul class='user-setings'>
          <li><div class="user-logo"> <img class='user-logo-img' src={avatar}/> </div></li>
          <li>Иван Иванов</li>
          <li><form action="/"><button>выйти</button></form></li>
      </ul>
    </nav>
    <div class="decoration-line"></div>
  </header>

</>
  
);
};
export { Header };
