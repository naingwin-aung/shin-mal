const Pagination = ({ total, limit, onClick, currentPage }) => {
  return (
    <div className="pagination">
      {Array.from({ length: Math.ceil(total / limit) }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => onClick(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
