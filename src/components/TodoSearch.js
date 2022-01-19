import React, { useContext } from 'react'
import { TodoContext } from '../context'
import '../styles/TodoSearch.css'


function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext)

    const onSearchChangeValue = (e) => {

        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

    return (
        <React.Fragment>
            <input 

            type="text" 
            className="search-input" 
            placeholder="Search a ToDo"
            value={ searchValue }
            onChange = { onSearchChangeValue }

            />
        </React.Fragment>
    );
    
}

export { TodoSearch };
