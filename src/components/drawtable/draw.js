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
    <div className="skrol">
      <table>
        <thead>
          <tr>
            <td className="decoration-table">
              <input type="checkbox"></input>
            </td>
            <td className="decoration-table"></td>
            <td className="decoration-table">
              Составной код
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Линия бизнеса
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              LOB
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Линейка услуг
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              SRV.LINE
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Услуга
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              SRV
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Элемент услуги
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              SRV.EL
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Тариф
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              TARRIF
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Эл. тарификации
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Ед. тарификации
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Тип тарифа
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
            <td class="decoration-table">
              Перерасчет
              <button className="settings-table">
                <img src={tableimg} alt="" />
              </button>
            </td>
          </tr>
        </thead>
        <tbody>{res}</tbody>
      </table>
    </div>
  );
}
export { Draw };
