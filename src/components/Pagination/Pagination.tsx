import ReactPaginate from "react-paginate";
import { PageChangeEvent } from "../../types";
import "./Pagination.css";

interface PageSetterProps {
  pageSetter: (n: number) => void;
}

function Pagination({ pageSetter }: PageSetterProps) {
  const onPageChange = (event: PageChangeEvent) => {
    pageSetter(event.selected);
  };
  return (
    <>
      <ReactPaginate
        className="pagination"
        pageCount={20}
        nextLabel=">"
        previousLabel="<"
        nextClassName="pagination_next"
        previousClassName="pagination_prev"
        // onClick={onPageClick}
        onPageChange={onPageChange}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        initialPage={0}
      />
    </>
  );
}
export default Pagination;
