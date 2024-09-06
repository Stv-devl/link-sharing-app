import { useMemo, useState } from 'react';
import { LinkDetail, UsePaginationReturn } from '@/types/types';

const useManagePagination = (
  links: LinkDetail[],
  itemsPerPage: number
): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(() => {
    const numPages = links && Math.ceil(links.length / itemsPerPage);
    return Array.from({ length: numPages }, (_, i) =>
      links.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
    );
  }, [links, itemsPerPage]);

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

export default useManagePagination;
