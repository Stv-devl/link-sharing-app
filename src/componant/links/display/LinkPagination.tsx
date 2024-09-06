import { LinkPaginationProps } from '@/types/types';
import React from 'react';

const LinkPagination: React.FC<LinkPaginationProps> = ({
  pages,
  pageNumbers,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <>
      {pages.length > 1 && (
        <div className="flex justify-center gap-3 w-full absolute bottom-[-50px]">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`w-9 h-9 text-dark-purple text-sm font-semibold rounded-full duration-500 ease-in-out  ${
                number === currentPage
                  ? 'bg-light-purple'
                  : 'bg-lightest-purple'
              } hover:bg-light-purple`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default LinkPagination;
