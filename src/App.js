import "./App.css";
import {Routes, Route } from "react-router-dom";
import { Serviceclassifier } from "./pages/Serviceclassifier";
import { Registration } from "./pages/registration";
import { Servicearchive } from "./pages/servicearchive";
import { Users } from "./pages/users";
import { Administration } from "./pages/administration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Serviceclassifier" element={<Serviceclassifier />} />
        <Route path="/Servicearchive" element={<Servicearchive />} />
        <Route path="/Users" element={<Users />}/>
        <Route path="/Administration" element={<Administration />}/>
      </Routes>
    </>
  );
}

export default App;
