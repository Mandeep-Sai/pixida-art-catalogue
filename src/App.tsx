import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Pagination from "./components/Pagination/Pagination";
import { ArtObject } from "./types";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasData, setHasData] = useState(false);

  const setPage = (page: number) => {
    setCurrentPage(page + 1);
  };
  const dataAvailable = (data: ArtObject[]) => {
    if (data.length > 0) {
      setHasData(true);
    }
  };
  return (
    <div className="art_catalogue">
      <Header />
      <Home pageNumber={currentPage} checkData={dataAvailable} />
      {hasData && <Pagination pageSetter={setPage} />}
    </div>
  );
}

export default App;
