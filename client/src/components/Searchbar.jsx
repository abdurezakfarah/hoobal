import {
  useState
} from "react"

import {
  useNavigate
} from "react-router-dom"


import { FiSearch } from "react-icons/fi"

const Searchbar = () => {
  const [ search, setSearch ] = useState("")
  
  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    navigate(`/search/${search}`)
  }
  
  return (
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="px-6 py-4 text-gray-600 focus-within:text-gray-600"
      >
      <label
       htmlFor="search-field"
       className="sr-only"
      >
       Search All Songs
      </label>
      <div
       className="flex flex-row justify-center sm:justify-start  items-center rounded-md"
      >
        <FiSearch 
        onClick={handleSubmit}
        className="h-5 w-5 mr-1 text-gray-100"/>
        <input 
          type="search"
          autoComplete="off"
          id="search-field"
          placeholder="Which song do you want to listen?"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 p-2 bg-transparent border-none outline-none placeholder-gray-50 text-sm sm:text-base text-white"
        />
      </div>
      </form>
  );
}

export default Searchbar;
