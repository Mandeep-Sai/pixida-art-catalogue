import { Route, Routes } from "react-router-dom";

import "./App.css";
import Art from "./components/Art/Art";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="art_catalogue">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Art />} />
      </Routes>
    </div>
  );
}

export default App;
