import "./modal.css";
import up from "../img/up.svg"
import down from "../img/down.svg"
import updown from "../img/updown.svg"
const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={e => e.stopPropagation()}
      >
        <h1>Отображение колонок</h1>
        <div class='decoration-line'></div>
        <ol>
          <li><div><input type="checkbox" checked='checked'/>Составной код</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>Линия бизнеса</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>LOB</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>Линейка услуг</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>SRV.LINE</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>Услуга</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>SRV</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>Элемент услуги</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>SRV.EL</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>        
          <li><div><input type="checkbox" checked/>Тариф</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>TARRIF</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>Эл. тарификации</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>Ед. тарификации</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>Тип тарифа</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
          <li><div><input type="checkbox" checked/>Перерасчет</div><div><img src={up}/><img src={down}/><img src={updown}/></div></li>
        </ol>
        <div class='decoration-line'></div>
        <ul class="choice-buttons">
          <li><button class="choice-buttons-reset">Сбросить</button></li>
          <li><button class="choise-buttons-accept">Применить</button></li>
        </ul>
      </div>
    </div>
  );
};
export { Modal };
