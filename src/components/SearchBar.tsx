import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <div>
      <label className="label">
        <span className="label-text">Search:</span>
      </label>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search tasks..."
        className="input input-bordered w-full"
      />
    </div>
  )
}

export default SearchBar
