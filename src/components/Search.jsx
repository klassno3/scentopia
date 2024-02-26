import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react'

const Search = ({onSubmit}) => {
  const [term, setTerm ] = useState(  );
    const handleChange = ( e ) => {
      setTerm( e.target.value );
  }
  const handleFormSubmit = ( e ) => {
    onSubmit( term );
    e.preventDefault();
  };
  return (
    <div>
      <form action="" className="" onSubmit={ handleFormSubmit } >
        <div className="flex items-center gap-3 border-[1px] border-text-light-gray rounded-md px-2  py-1   ">
          <FontAwesomeIcon
            icon={ faSearch }
            className="reflect text-sm cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <input type="search" placeholder='Search ...' value={ term } onChange={ handleChange }
            className="flex items-center justify-between focus:outline-none text-sm  font-Montserrat" />
        </div>
      </form>
    </div>
  )
}

export default Search
