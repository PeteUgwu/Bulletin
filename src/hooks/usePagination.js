/* eslint-disable no-plusplus */
export const DOTS = '...';

function usePagination({ currentPage, pageCount }) {
  const startPages = [];
  const endPages = [];

  if (currentPage === 1) {
    startPages.push(1);
    if (pageCount > 4) {
      endPages.push(DOTS);
    }

    if (pageCount > 3) {
      endPages.push(pageCount);
    }
    for (let i = 1; i <= 2; i++) {
      const page = i + 1;
      if (page > pageCount) break;
      startPages.push(page);
    }
  } else if (currentPage === pageCount) {
    endPages.push(pageCount);
    for (let i = 1; i <= 2; i++) {
      const page = pageCount - i;
      if (page < 2) break;
      endPages.unshift(page);
    }
    if (pageCount - 2 > 1) {
      startPages.push(1);
      endPages.unshift(DOTS);
    }
  } else {
    const nextPage = currentPage + 1;
    const previousPage = currentPage - 1;
    startPages.push(previousPage, currentPage);
    endPages.push(nextPage);
    if (previousPage !== 1) {
      if (previousPage > 2) {
        startPages.unshift(DOTS);
      }
      startPages.unshift(1);
    }
    if (nextPage !== pageCount) {
      if (nextPage < pageCount - 1) {
        endPages.push(DOTS);
      }
      endPages.push(pageCount);
    }
  }
  return startPages.concat(endPages);
}

export default usePagination;
