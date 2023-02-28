import "./modal.css";
import up from "../../img/up.svg"
import down from "../../img/down.svg"
import updown from "../../img/updown.svg"
const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
        <h1>Отображение колонок</h1>
        <div class='decoration-line'></div>
        <ol>
          <li><div><input type="checkbox" defaultChecked/>Составной код</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>Линия бизнеса</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>LOB</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>Линейка услуг</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>SRV.LINE</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>Услуга</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>SRV</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>Элемент услуги</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>SRV.EL</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>  
          <li><div><input type="checkbox" defaultChecked/>Тариф</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>TARRIF</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>Эл. тарификации</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>Ед. тарификации</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>Тип тарифа</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
          <li><div><input type="checkbox" defaultChecked/>Перерасчет</div><div><button class="up-down-button"><img src={up}/></button><button class="up-down-button"><img src={down}/></button><button class="up-down-button"><img src={updown}/></button></div></li>
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
