import React, { useMemo, useState } from 'react';

const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(() => {
    const numPages = items && Math.ceil(items.length / itemsPerPage);
    return Array.from({ length: numPages }, (_, i) =>
      items.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
    );
  }, [items, itemsPerPage]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: pages.length }, (_, index) => index);
  }, [pages.length]);

  return {
    pages,
    pageNumbers,
    currentPage,
    setCurrentPage,
  };
};

export default usePagination;
