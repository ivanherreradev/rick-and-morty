import { useEffect, useState } from 'react'

function App () {
  const [characters, setCharacters] = useState([])
  const [data, setData] = useState({})
  const [page, setPage] = useState(1)
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')

  const API = `https://rickandmortyapi.com/api/character/?page=${page}&gender=${gender}&status=${status}&species=${species}`

  // options for select
  const genders = ['female', 'male', 'genderless', 'unknown']
  const characterStatus = ['alive', 'dead', 'unknown']
  const characterSpecies = [
    'human',
    'alien',
    'humanoid',
    'poopybutthole',
    'mythological',
    'unknown',
    'animal',
    'disease',
    'robot',
    'cronenberg',
    'planet'
  ]

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
  }

  const handleFilterStatus = (value) => {
    setStatus(value)
  }

  const handleFilterSpecies = (value) => {
    setSpecies(value)
  }

  return (
    <div>
      <h1>Rick & Morty Wiki</h1>

      {/* Pagination */}
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>

      {/* Filters */}
      {/* Gender */}
      <select onChange={(e) => handleFilterGender(e.target.value)}>
        <option value={''}>All Genders</option>
        {genders.map((gender) => {
          return (
            <option key={gender} value={gender}>
              {gender}
            </option>
          )
        })}
      </select>
      {/* Status */}
      <select onChange={(e) => handleFilterStatus(e.target.value)}>
        <option value={''}>All Status</option>
        {characterStatus.map((status) => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          )
        })}
      </select>
      {/* Species */}
      <select onChange={(e) => handleFilterSpecies(e.target.value)}>
        <option value={''}>All Species</option>
        {characterSpecies.map((species) => {
          return (
            <option key={species} value={species}>
              {species}
            </option>
          )
        })}
      </select>

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
    </div>
  )
}

export default App
