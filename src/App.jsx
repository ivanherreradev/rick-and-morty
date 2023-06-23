import { useEffect, useState } from 'react'

function App () {
  const [characters, setCharacters] = useState([])
  const [data, setData] = useState({})
  const [page, setPage] = useState(1)

  const API = `https://rickandmortyapi.com/api/character?page=${page}`

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results)
        setData(data.info)
      })
  }, [API])

  console.log(characters)
  console.log(data)

  const handlePrevPage = () => {
    if (data.prev) {
      setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    if (data.next) {
      setPage(page + 1)
    }
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
