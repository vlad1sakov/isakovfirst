import { useState } from "react";
import { Modal } from "../modal/modal";

import { Toadd } from "../toadd/toadd";
import "./tablesetings.css";
import arhiv from"../../img/arhiv.svg"
const Tablesetings = () => {
  const [modalActive, setModalActive] = useState(false);
  const [toaddActive, setToaddActive] = useState(false);
 
  return (
    <>
      <div className="tablesettings">
        <form>
          <input className="tablesettings-search" placeholder="Поиск..." type="search"></input>
        </form>
        <div className="tablesettings-settings">
          <button onClick={() => setModalActive(true)} className="tablesettings-settings-first-button">
            Настроить
          </button>  
             <img src={arhiv}/>
             <input type="checkbox" checked/>
             <p>Архивные</p></div>
          <div className="helpsecondbutton">
            <button onClick={() => setToaddActive(true)} className="tablesettings-settings-second-button">+ Добавить услугу</button>                                 
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
      <Toadd active={toaddActive} setActive={setToaddActive} />
    </>
  );
};
export { Tablesetings };
