function Pagination ({ page, totalPages, handleNextPage, handlePrevPage }) {
  return (
    <div className="join my-8">
      <button className="join-item btn" onClick={handlePrevPage}>«</button>
      <div className="join-item btn">Page {page} | {totalPages}</div>
      <button className="join-item btn" onClick={handleNextPage}>»</button>
    </div>
  )
}

export default Pagination
