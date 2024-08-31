import { useMemo, useState } from 'react';
import { Users, UsePaginationReturn } from '@/types/types';

const useManageLinks = (
  user: Users | null,
  itemsPerPage: number
): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(0);

  const selectedLinks = useMemo(() => {
    return user && user.links
      ? Object.entries(user.links).filter(([, item]) => item.isSelected)
      : [];
  }, [user]);

  const pages = useMemo(() => {
    const numPages =
      selectedLinks && Math.ceil(selectedLinks.length / itemsPerPage);
    return Array.from({ length: numPages }, (_, i) =>
      selectedLinks.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
    );
  }, [selectedLinks, itemsPerPage]);

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

export default useManageLinks;
