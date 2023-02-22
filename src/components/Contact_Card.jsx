import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact_Card = (props) => {
  return (
    <div className='contact_card'>
        <div className="person_info">
            <p>{props.name}</p>
            <p>{props.company}</p>
            <p>{props.profession}</p>
        </div>

        <div className="contact_info">
            <span className='contact_info_rounded'>{props.number}</span>
            <p className='contact_info_rounded'>{props.email}</p>
        </div>

        <span onClick={() => props.deleteCurrent(props.id)} className='deleteCurrent_contact_btn'>
          <FontAwesomeIcon className='trashbin_icon' icon={faTrash} />
        </span>
    </div>
  )
}

export default Contact_Card