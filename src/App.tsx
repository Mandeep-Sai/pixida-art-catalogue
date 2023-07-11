import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const setPage = (page: number) => {
    setCurrentPage(page + 1);
  };
  return (
    <div className="art_catalogue">
      <Header />
      <Home pageNumber={currentPage} />
      <Pagination pageSetter={setPage} />
    </div>
  );
}

export default App;
