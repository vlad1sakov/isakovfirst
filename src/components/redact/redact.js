import "./redact.css";
const Redact = ({ active, setActive }) => {
  return (
    <div
      className={active ? "redact active" : "redact"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "redact-content active" : "redact-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Редактировать услугу</h1>
        <form class="gridform">
          <div class="tetet">
            <label>Составной код</label>
            <span class="formplace">10.10.10.10.11</span>
          </div>
          <div class="tetet"></div>
          <div class="tetet">
            <label>Линии бизнеса</label>
            <select class="formplace"></select>
          </div>
          <div class="tetet">
            <label>LOB</label>
            <span>10</span>
          </div>{" "}
          <div class="tetet">
            <label>Линии услуг</label>
            <select class="formplace"></select>
          </div>
          <div class="tetet">
            <label>SRV.LINE</label>
            <span class="formplace">10</span>
          </div>{" "}
          <div class="tetet">
            <label>Услуги</label>
            <select class="formplace"></select>
          </div>
          <div class="tetet">
            <label>SRV</label>
            <span class="formplace">10</span>
          </div>
          <div class="tetet">
            <label>Элемент услуги</label>
            <select class="formplace"></select>
          </div>
          <div class="tetet">
            <label>SRV.EL</label>
            <span class="formplace">10</span>
          </div>
          <div class="tetet">
            <label>Тариф</label>
            <select class="formplace"></select>
          </div>
          <div class="tetet">
            <label>tariff</label>
            <span class="formplace">12</span>
          </div>
          <div class="tetet">
            <label>Элемент тарификации</label>
            <select class="formplace"></select>
          </div>
          <div class="tetet">
            <label>Единица тарификации</label>
            <select class="formplace"></select>
          </div>
          <div class="tetet">
            <label>Тип тарифа, ежемесячно</label>
            <select class="formplace"></select>
          </div>
          <div class="tetet">
            <label>Перерасчет</label>
            <select class="formplace"></select>
          </div>
        </form>
        <div class="decoration-line"></div>
        <ul class="formb">
          <li>
            <button class="formbu">В архив</button>
            <button class="formbut">Удалить</button>
          </li>

          <li>
            <button class="formbutt">Сохранить</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export { Redact };
