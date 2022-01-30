import "./App.scss";
import RedPages from "./page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RedPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
