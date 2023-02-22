import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {React, useState} from 'react'
import Contact_Card from './Contact_Card'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Contact_List = (props) => {
  return (
    <>
      <div className='add_contacts_header'>
        <div className='settings_buttons'>
          <button onClick={() => props.openCloseForm(true)} className='header_button_base add_contacts_button'>New</button>
          <button onClick={props.deleteContactsAll} className='header_button_base delete_all_btn'>Delete All</button>
        </div>

        <div className='searchbar'>
          <input type="text" 
          placeholder='Search contacts'
          onChange={props.searchbarLogic}
          />
          <FontAwesomeIcon className='icon' icon={faSearch}/>
        </div>
      </div>

      <div className='contact_list'>
      {props.contactData == 0 ? <span className='no_contacts_placeholder'>No Contacts added</span> : ""} 
      {props.contactData && props.contactData.map((contact, index) => {
        return (
          <Contact_Card 
          key={contact.id}
          id={contact.id}
          name={contact.name} 
          company={contact.company}
          profession={contact.profession}
          number={contact.number}
          email={contact.email}
          deleteCurrent={props.deleteCurrent}
          />
        ) 
      })}
      </div>
    </>
  )
}

export default Contact_List