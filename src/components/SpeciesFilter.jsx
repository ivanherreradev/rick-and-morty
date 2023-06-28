function SpeciesFilter ({ handleFilterSpecies }) {
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

  return (
    <select
      className="select select-success w-full max-w-xs"
      onChange={(e) => handleFilterSpecies(e.target.value)}
    >
      <option disabled selected>
        Pick character status
      </option>
      <option value={''}>All species</option>
      {characterSpecies.map((species) => {
        return (
          <option key={species} value={species} className="capitalize">
            {species}
          </option>
        )
      })}
    </select>
  )
}

export default SpeciesFilter
