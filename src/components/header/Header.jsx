import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header>
      <div className="main_header">
        <h1>Contact Manager</h1>
        <FontAwesomeIcon className='icon' icon={faContactBook} />
      </div>
    </header>
  )
}
