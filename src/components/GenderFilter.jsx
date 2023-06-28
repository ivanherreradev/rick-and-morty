function GenderFilter ({ handleFilterGender }) {
  const genders = ['female', 'male', 'genderless', 'unknown']

  return (
    <select
      className="select select-success w-full max-w-xs"
      onChange={(e) => handleFilterGender(e.target.value)}
    >
      <option disabled selected>
        Pick character gender
      </option>
      <option value={''}>All genders</option>
      {genders.map((gender) => {
        return (
          <option key={gender} value={gender} className="capitalize">
            {gender}
          </option>
        )
      })}
    </select>
  )
}

export default GenderFilter
