import "./toadd.css";
const Toadd = ({ active, setActive }) => {
  return (
    <div
      className={active ? "toadd active" : "toadd"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "toadd-content active" : "toadd-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Добавить услугу</h1>
        <div class="tett">
        <ul class="setingcolumns">
        <li>Составной код</li>
        <li><p>10.10.10.10.11</p></li>
          <li>Линия бизнеса</li><li><select></select></li>
          <li>Линейка услуг</li><li><select></select></li>
          <li>Услуга</li><li><select></select></li>
          <li>Элемент услуги</li><li><select></select></li>
          <li>Тариф</li><li><select></select></li>
          <li>Элемент тарификации</li><li><select></select></li>
          <li>Тип тарифа, ежемесячно</li><li><select></select></li>
          </ul>
          <ul class="setingcolumns">
          <li><div>.</div></li>  
          <li>LOB</li><li><p>10</p></li>
          <li>SRV.LINE</li><li><p>10</p></li>
          <li>SRV</li><li><p>10</p></li>
          <li>SRV.EL</li><li><p>10</p></li>
          <li>tariff</li><li><p>12</p></li>
          <li>Единица тарификации</li><li><select></select></li>
          <li>Перерасчет</li><li><select></select></li>
        </ul></div>
      </div>
    </div>
  );
};
export { Toadd };
