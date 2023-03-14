import "./modal.css";
import { Buttondown } from "../buttons/buttondown/buttondown";
import { Buttonup } from "../buttons/buttonup/buttonup";
import { Buttonsearch } from "../buttons/buttonsearch/buttonsearch";
const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Отображение колонок</h1>
        <div className="decoration-line"></div>
        <ol>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Составной код
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Линия бизнеса
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              LOB
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Линейка услуг
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              SRV.LINE
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Услуга
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              SRV
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Элемент услуги
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              SRV.EL
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Тариф
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              TARRIF
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Эл. тарификации
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Ед. тарификации
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Тип тарифа
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
          <li>
            <div>
              <input type="checkbox" defaultChecked />
              Перерасчет
            </div>
            <div>
              <Buttondown />
              <Buttonup />
              <Buttonsearch />
            </div>
          </li>
        </ol>
        <div className="decoration-line"></div>
        <ul className="choice-buttons">
          <li>
            <button className="choice-buttons-reset">Сбросить</button>
          </li>
          <li>
            <button className="choise-buttons-accept">Применить</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export { Modal };
