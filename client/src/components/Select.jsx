const Select = ({ options, handleChange, genreListId }) => {
  return (
       <select
        className="bg-black mt-5 sm:mt-0 p-3 text-sm text-gray-300 rounded-lg outline-none  "
        defaultValue='POP'
        
        onChange={handleChange}
        defaultValue={genreListId}
       >       
         {
           options
              .map(option => (
                <option 
                  key={option.value}
                  value={option.value}
                  >
                  { option.title || option.value }
               </option>
              ))
         }
       </select>
  )
}

export default Select