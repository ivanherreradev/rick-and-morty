function Search ({ handleSearch }) {
  const handleSubmit = (e) => {
    // Avoid page reloading
    e.preventDefault()
    // Get the input value
    const inputValue = e.target.querySelector('input').value
    // Update state
    handleSearch(inputValue)
    // Clean input value
    e.target.querySelector('input').value = ''
  }

  return (
    <div className="form-control my-4">
      <form className="input-group" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered"
        />
        <button className="btn btn-square" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Search
