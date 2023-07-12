import { Route, Routes } from "react-router-dom";

import "./App.css";
import Art from "./components/Art/Art";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="art_catalogue">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art/:id" element={<Art />} />
        <Route path="/:query" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
