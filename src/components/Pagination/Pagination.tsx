import ReactPaginate from "react-paginate";
import { PageChangeEvent, PageSetterProps } from "../../types";
import "./Pagination.css";

function Pagination({ pageSetter, currentPage }: PageSetterProps) {
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
        forcePage={currentPage}
        onPageChange={onPageChange}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
      />
    </>
  );
}
export default Pagination;
