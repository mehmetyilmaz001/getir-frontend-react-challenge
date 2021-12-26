import { FunctionComponent } from "react";
import NextPrevButton from "./components/NextPrevButton";
import { StyledPagination } from "./components/StyledComponent";


interface PaginationProps {
  /**
   * The active page number which is used to determine which page is selected
   */  
  activePage: number;

  /**
   * The total number of pages
   */
  totalPages: number;

  /**
   * The function to be called when the page is selected
   */ 
  onChange: (page: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  activePage,
  totalPages,
  onChange,
}) => {
 

const isAtTheFirstPage = activePage === 0;
const isAtTheLastPage = (activePage + 1) === totalPages;

  return (
    <StyledPagination
      
      aria-label="pagination"
      breakLabel="..."
      isAtTheFirstPage={isAtTheFirstPage}
      isAtTheLastPage={isAtTheLastPage}
      nextLabel={
        <NextPrevButton
          disabled={(activePage + 1) === totalPages}
          direction="right"
        />
      }
      onPageChange={(page) => onChange(page.selected)}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel={
        <NextPrevButton
          disabled={activePage === 0}
          direction="left"
        />
      }
      renderOnZeroPageCount={(props) => {
        return null;
      }}
    />
  );
};

export default Pagination;

