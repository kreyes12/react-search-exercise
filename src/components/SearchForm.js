import React from 'react'

const SearchForm = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input type="text"
       placeholder={"Search Bots"}
       onChange={(event) => {props.handleChange(event.target.value)}}/>
    </div>
  )
}

export default SearchForm
