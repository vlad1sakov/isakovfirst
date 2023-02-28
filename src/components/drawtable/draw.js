import pencil from "../../img/pencil.svg";
import tableimg from "../../img/tableimg.svg";
import { useState } from "react";
import "./draw.css";
import { Redact } from "../redact/redact";
import { From_server } from "../mock_backend";
function Draw() {
  const [redactActive, setRedactActive] = useState(false);
  let res = From_server.map(function (item) {
    return (
      <>
        <tr key={item}>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>
            <button onClick={() => setRedactActive(true)} class="redaction">
              <img src={pencil} atl="" />
            </button>
          </td>
          <td>{item.code}</td>
          <td>{item.business}</td>
          <td>{item.lob}</td>
          <td>{item.liveservice}</td>
          <td>{item.srvlive}</td>
          <td>{item.service}</td>
          <td>{item.srv}</td>
          <td>{item.elmservice}</td>
          <td>{item.srlel}</td>
          <td>{item.tarif}</td>
          <td>{item.tarrif}</td>
          <td>{item.eltarif}</td>
          <td>{item.edtarif}</td>
          <td>{item.typetarif}</td>
          <td>{item.recalculation}</td>
        </tr>
        <Redact active={redactActive} setActive={setRedactActive} />
      </>
    );
  });

  return (
    <div class="skrol">
      <table>
        <thead>
          <tr>
            <td class="decoration-table">
              <input type="checkbox"></input>
            </td>
            <td class="decoration-table"></td>
            <td class="decoration-table">
              Составной код
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              Линия бизнеса
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              LOB
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              Линейка услуг
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              SRV.LINE
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              Услуга
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              SRV
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              Элемент услуги
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              SRV.EL
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              Тариф
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              TARRIF
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              Эл. тарификации
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">Ед. тарификации</td>
            <td class="decoration-table">
              Тип тарифа
              <img src={tableimg} alt="" />
            </td>
            <td class="decoration-table">
              Перерасчет
              <img src={tableimg} alt="" />
            </td>
          </tr>
        </thead>
        <tbody>{res}</tbody>
      </table>
    </div>
  );
}
export { Draw };
