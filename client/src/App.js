import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Home} from "./component/Pages/Home";
import Admin from "./component/Admin/Admin";
import Login from "./component/Admin/Login";
import Data from "./component/Admin/Data";
import RequiredAuth from "./hoc/RequiredAuth";
import { Navbar } from "./component/Pages/Navbar";
import { NewPage } from "./component/Pages/NewPage";
import { Fotter } from "./component/Pages/Fotter";
function App() {
  return (
    <div style={{backgroundColor:"#f5e3d7"}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<NewPage />} />
        <Route path="/form" element={<Home />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/data"
          element={
            <RequiredAuth>
              <Data />
            </RequiredAuth>
          }
        />
      
      </Routes>
      <Fotter/>
    </div>
  );
}

export default App;
