import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Art from "./components/Art/Art";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Pagination from "./components/Pagination/Pagination";
import { ArtObject } from "./types";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasData, setHasData] = useState(false);
  const [data, setData] = useState<ArtObject[]>([]);

  const setPage = (page: number) => {
    setCurrentPage(page + 1);
  };
  const dataAvailable = (data: ArtObject[]) => {
    if (data.length > 0) {
      setHasData(true);
      setData(data);
    }
  };
  return (
    <div className="art_catalogue">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home pageNumber={currentPage} checkData={dataAvailable} />}
        />

        {/* <Route path="" element={<Pagination pageSetter={setPage} />} /> */}

        <Route path="/:id" element={<Art />} />
      </Routes>
      {hasData && <Pagination pageSetter={setPage} />}
    </div>
  );
}

export default App;
