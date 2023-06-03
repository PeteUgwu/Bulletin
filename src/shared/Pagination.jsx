import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import usePagination, { DOTS } from '../hooks/usePagination';

function Pagination({
  onPageChange,
  onPageSizeOptionChange,
  totalCount,
  currentPage,
  pageSize,
  pageSizeOptions,
  onNext,
  onPrev,
}) {
  const pageCount = Math.ceil(totalCount / pageSize);
  const paginationRange = usePagination({
    currentPage,
    pageCount,
  });

  return (
    <ul
      className="pagination-wrapper"
      // Do not remove the aria-label below, it is used for Hatchways automation.
      aria-label="news pagination list"
    >
      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton left"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto previous page"
          onClick={onPrev}
          disabled={currentPage === 1} // change this line to disable a button.
        >
          <BsChevronLeft />
        </button>
      </li>

      {paginationRange.map((pageNumber) => {
        const key = nanoid();

        if (pageNumber === DOTS) {
          return (
            <li key={key} className="dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className="paginationItem"
            aria-current={`${pageNumber === currentPage ? 'page' : 'false'}`} // change this line to highlight a current page.
          >
            <button
              type="button"
              // Do not remove the aria-label below, it is used for Hatchways automation.
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton right"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto next page"
          onClick={onNext}
          disabled={pageCount === currentPage} // change this line to disable a button.
        >
          <BsChevronRight />
        </button>
      </li>

      {/* {
        pageSizeOptions && onPageSizeOptionChange?  <select
        className="paginationSelector"
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(Number(e.target.value));
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} defaultValue={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select> : ''
     } */}
    </ul>
  );
}
Pagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.instanceOf(Array),
  onPageChange: PropTypes.func,
  onPageSizeOptionChange: PropTypes.func,
};

Pagination.defaultProps = {
  totalCount: 0,
  currentPage: 1,
  pageSize: 15,
  //   pageSizeOptions: [15, 25, 50, 100],
  onPageChange: () => {},
  //   onPageSizeOptionChange: () => {},
};

export default Pagination;
