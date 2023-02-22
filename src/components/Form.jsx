import {React} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircleUser, faBuilding, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => {
    return (
      <div style={props.checkIf_Open == true ? {visibility: "visible", opacity: 1, transition: "500ms"} : {visibility: "hidden"}} className='form_wrapper'>

        <form style={props.checkIf_Open == true ? {visibility: "visible", opacity: 1, transition: "1500ms ease-in", left:0} : {visibility: "hidden"}} onSubmit={props.handleSubmit}>

          {/*close form button*/}
          <div onClick={() => props.openCloseForm(false)} className='close_form_btn'>
            <FontAwesomeIcon icon={faXmark} className="xicon"/>
          </div>

          <label htmlFor="name">
            Contact Name:
            <input 
            name="name"
            type="text" 
            placeholder='Lucas Cerri'
            onChange={props.handleChange}
            />

            <FontAwesomeIcon className='inputs_icon' icon={faCircleUser}/>

            
            {props.errors.errorName === true ? <span className='error_message'>Please enter a name</span> : ""}
          </label>

          <label htmlFor="company">
            Contact Company:
            <input 
            type="text" 
            name="company"
            placeholder='Microsoft Corporation'
            onChange={props.handleChange}
            />

            <FontAwesomeIcon className='inputs_icon' icon={faBuilding} />

            {props.errors.errorCompany == true ? <span className='error_message'>Please enter a company</span> : ""}
          </label>

          <label htmlFor="profession">
            Contact profession:
            <input 
            type="text" 
            name="profession"
            placeholder='e.g. Doctor, Teacher, Scientist'
            onChange={props.handleChange}
            />

            <FontAwesomeIcon className='inputs_icon' icon={faBriefcase} />

            {props.errors.errorProfession === true ? <span className='error_message'>Please enter a profession</span> : ""}
          </label>

          <label htmlFor="number">
            Contact Phone-number:
            <input 
            type="text" 
            name="number"
            placeholder='+1-555-555-1212'
            onChange={props.handleChange}
            />

            <FontAwesomeIcon className='inputs_icon' icon={faPhone} />

            {props.errors.errorNumber === true ? <span className='error_message'>Please enter a phone-number</span> : ""}
          </label>

          <label htmlFor="email">
            Contact E-Mail address:
            <input 
            type="text" 
            name="email"
            placeholder='test@mail.com'
            onChange={props.handleChange}
            />

            <FontAwesomeIcon className='inputs_icon' icon={faEnvelope} />

            {props.errors.errorMail === true ? <span className='error_message'>Please enter an E-Mail Address</span> : ""}
          </label>
          
          <button type='submit' className='create_contact_btn'>Create Contact</button>
        </form>
      </div>
    )
  }

export default Form