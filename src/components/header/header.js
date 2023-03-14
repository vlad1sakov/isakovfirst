import "./header.css"
import avatar from "../../img/avatar.svg"
const Header = () => {
  return(
  <>
  <div className='top'>
    <nav>
      <ul className='navigation'>
        <li><a class="navigation-logo" href="/Serviceclassifier">DemoPort</a></li>
        <li><a href="/Serviceclassifier">Классификатор услуг</a></li>
        <li><a href="Servicearchive">Архив услуг</a></li>
        <li><a href="/Users">Пользователи</a></li>
        <li><a href="/Administration">Администрирование</a></li>
      </ul> 
      </nav>
      <ul className='user-setings'>
          <li><div className="user-logo"> <img className='user-logo-img' src={avatar}/> </div></li>
          <li>Иван Иванов</li>
          <li><form action="/"><button>выйти</button></form></li>
      </ul>
   </div>
    <div class="decoration-line"></div>

</>
  
);
};
export { Header };
