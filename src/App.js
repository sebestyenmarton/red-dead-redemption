import "./App.scss";
import Pages from "./page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
