import Form from "./components/form";
import { Routes, Route } from "react-router-dom";
import Success from "./components/success";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/" element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
