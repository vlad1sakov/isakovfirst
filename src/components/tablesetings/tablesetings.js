import { useState } from "react";
import { Modal } from "../modal/modal";
import { Toadd } from "../toadd/toadd";
import "./tablesetings.css";
import arhiv from"../img/arhiv.svg"
const Tablesetings = () => {
  const [modalActive, setModalActive] = useState(false);
  const [toaddActive, setToaddActive] = useState(false);
  return (
    <>
      <div class="tablesettings">
        <form>
          <input class="tablesettings-search" placeholder="    Поиск...                                                 🔍" type="search"></input>
        </form>
   
        <div class="tablesettings-settings">
          <button onClick={() => setModalActive(true)} class="tablesettings-settings-first-button">
            Настроить
          </button>  
             <img src={arhiv}/>
             <input type="checkbox" checked/>
             <p>Архивные</p></div>
          <div class="helpsecondbutton">
            <button onClick={() => setToaddActive(true)} class="tablesettings-settings-second-button">
              + Добавить услугу
            </button>
          
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
      <Toadd active={toaddActive} setActive={setToaddActive} />
    </>
  );
};
export { Tablesetings };
