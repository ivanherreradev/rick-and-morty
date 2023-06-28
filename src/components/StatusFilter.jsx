function StatusFilter ({ handleFilterStatus }) {
  const characterStatus = ['alive', 'dead', 'unknown']

  return (
    <select
      className="select select-success w-full max-w-xs"
      onChange={(e) => handleFilterStatus(e.target.value)}
    >
      <option disabled selected>
        Pick character status
      </option>
      <option value={''}>All status</option>
      {characterStatus.map((status) => {
        return (
          <option key={status} value={status} className="capitalize">
            {status}
          </option>
        )
      })}
    </select>
  )
}

export default StatusFilter
