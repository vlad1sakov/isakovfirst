import "./toadd.css";
const Toadd = ({ active, setActive }) => {
  return (
    <div className={active ? "toadd active" : "toadd"} onClick={() => setActive(false)} >
      <div className={active ? "toadd-content active" : "toadd-content"} onClick={(e) => e.stopPropagation()}>
        <h1>Добавить услугу</h1>
        <form className="gridform">
          <div className="tetet">
            <label>Составной код</label>
            <span className="formplace">10.10.10.10.11</span>
          </div>
          <div className="tetet"></div>
          <div className="tetet">
            <label>Линии бизнеса</label>
            <select className="formplace"></select>
          </div>
          <div class="tetet">
            <label>LOB</label>
            <span>10</span>
          </div>{" "}
          <div className="tetet">
            <label>Линии услуг</label>
            <select className="formplace"></select>
          </div>
          <div className="tetet">
            <label>SRV.LINE</label>
            <span class="formplace">10</span>
          </div>{" "}
          <div className="tetet">
            <label>Услуги</label>
            <select className="formplace"></select>
          </div>
          <div className="tetet">
            <label>SRV</label>
            <span class="formplace">10</span>
          </div>
          <div className="tetet">
            <label>Элемент услуги</label>
            <select className="formplace"></select>
          </div>
          <div className="tetet">
            <label>SRV.EL</label>
            <span className="formplace">10</span>
          </div>
          <div className="tetet">
            <label>Тариф</label>
            <select className="formplace"></select>
          </div>
          <div className="tetet">
            <label>tariff</label>
            <span className="formplace">12</span>
          </div>
          <div className="tetet">
            <label>Элемент тарификации</label>
            <select className="formplace"></select>
          </div>
          <div class="tetet">
            <label>Единица тарификации</label>
            <select className="formplace"></select>
          </div>
          <div className="tetet">
            <label>Тип тарифа, ежемесячно</label>
            <select className="formplace"></select>
          </div>
          <div className="tetet">
            <label>Перерасчет</label>
            <select className="formplace"></select>
          </div>
        </form>
        <div className="decoration-line"></div>
        <ul className="formb">
          <li>
            <button className="formbu">В архив</button>
            <button className="formbut">Удалить</button>
          </li>
          <li>
            <button className="formbutt">Сохранить</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export { Toadd };
