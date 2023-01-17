import styles from './Pagination.module.css';

export const Pagination = ({totalUsersCount, pageSize, onPageChange, currentPage}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    if (pages.length < 20) {
      pages.push(i);
    }
  }

  return (
    <div className={styles.paginationWrapper}>
      {pages.map((page) => {
        return (
          <span
            onClick={() => {
              onPageChange(page);
            }}
            key={page}
            className={
              currentPage === page ? styles.activePage : undefined
            }>
            {page}
          </span>
        );
      })}
    </div>
  );
};
