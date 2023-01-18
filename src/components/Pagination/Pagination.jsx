import { useState } from "react";
import { LeftRightButton } from "../common/LeftRightButton";
import styles from "./Pagination.module.css";

export const Pagination = ({
  totalItemsCount,
  pageSize,
  onPageChange,
  currentPage,
  portionSize = 10,
}) => {
  let pageCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  const portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.paginationWrapper}>
      {portionNumber > 1 && (
        <LeftRightButton direction='left' onClick={() => setPortionNumber(portionNumber - 1)}/>
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <span
              onClick={() => {
                onPageChange(page);
              }}
              key={page}
              className={currentPage === page ? styles.activePage : undefined}
            >
              {page}
            </span>
          );
        })}
        {portionCount > portionNumber &&
        <LeftRightButton direction='right' onClick={() => setPortionNumber(portionNumber + 1)}/>
}
    </div>
  );
};
