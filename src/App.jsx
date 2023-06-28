import { useEffect, useState } from 'react'
import GenderFilter from './components/GenderFilter'
import Search from './components/Search'
import SpeciesFilter from './components/SpeciesFilter'
import StatusFilter from './components/StatusFilter'

function App () {
  const [characters, setCharacters] = useState([])
  const [data, setData] = useState({})
  const [page, setPage] = useState(1)
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [search, setSearch] = useState('')

  const API = `https://rickandmortyapi.com/api/character/?page=${page}&gender=${gender}&status=${status}&species=${species}&name=${search}`

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

  const handleFilterGender = (value) => {
    setGender(value)
    setPage(1)
  }

  const handleFilterStatus = (value) => {
    setStatus(value)
    setPage(1)
  }

  const handleFilterSpecies = (value) => {
    setSpecies(value)
    setPage(1)
  }

  const handleSearch = (value) => {
    setSearch(value)
    setPage(1)
  }

  return (
    <div className="mx-auto my-4 flex flex-col items-center max-w-[1200px]">
      <h1 className="text-white font-bold text-3xl text-center my-2">
        Rick & Morty Wiki
      </h1>

      <Search handleSearch={handleSearch} />

      {/* Filters */}
      <div className="flex flex-col gap-4 my-4 md:flex md:flex-row">
        <GenderFilter handleFilterGender={handleFilterGender} />
        <StatusFilter handleFilterStatus={handleFilterStatus} />
        <SpeciesFilter handleFilterSpecies={handleFilterSpecies} />
      </div>

      {/* Characters */}
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
            </li>
          )
        })}
      </ul>

      {/* Pagination */}
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  )
}

export default App
