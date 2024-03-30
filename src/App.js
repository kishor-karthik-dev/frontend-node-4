import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-passsword" element={<ForgetPassword />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
