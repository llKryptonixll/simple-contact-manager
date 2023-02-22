import { useState, useEffect } from 'react'
import { Header } from './components/header/Header'
import Contact_List from './components/Contact_List'
import Form from './components/Form'
import './App.css' 

function App() {
  const [isOpen, setIsOpen] = useState(false);
  isOpen == true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";

  const [errors, setErrors] = useState({
    errorName: false,
    errorCompany: false,
    errorProfession: false,
    errorNumber: false,
    errorMail: false
  });

  const [inputs, setInputs] = useState({});
  const {name, company, profession, number, email} = inputs;

  const [contacts, setContacts] = useState(() => {

    const savedContacts = localStorage.getItem("contacts");
      if (savedContacts) {
        return JSON.parse(savedContacts);
      } else {
        return [];
      }

  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function openCloseForm(boolValue) {
    setIsOpen(boolValue)
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    // set errors
    if (!name || !company || !profession || !number || !email){
      !name ? setErrors(prev => ({...prev, errorName: true})) : setErrors(prev => ({...prev, errorName: false}));
      !company ? setErrors(prev => ({...prev, errorCompany: true})) : setErrors(prev => ({...prev, errorCompany: false}));
      !profession ? setErrors(prev => ({...prev, errorProfession: true})) : setErrors(prev => ({...prev, errorProfession: false}));
      !number ? setErrors(prev => ({...prev, errorNumber: true})) : setErrors(prev => ({...prev, errorNumber: false}));
      !email ? setErrors(prev => ({...prev, errorMail: true})) : setErrors(prev => ({...prev, errorMail: false}));
    }

    else{
      setErrors({});

      setContacts([
        ...contacts,
        {
          id: contacts.length +1,
          name: name,
          company: company,
          profession: profession,
          number: number,
          email: email
        }
      ]);
    }

  }

  function deleteCurrentContact(id) {
    if(contacts == 0){
      
    }
    else{
      setContacts(oldValues => {
        return oldValues.filter(contacts => contacts.id !== id);
      })
    }
  }

  function deleteAll() {
    setContacts("")
  }

  const filteredList = contacts.length !== "" ? "" : contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  function handleSearchbar_change(e) {
    setFilter(e.target.value);
  }

  return (
    <div className="App">
      <Header/>
      {
        filter !== "" 
        ?
        <Contact_List 
        openCloseForm={openCloseForm} 
        deleteContactsAll={deleteAll} 
        deleteCurrent={deleteCurrentContact} 
        contactData={filteredList}
        searchbarLogic={handleSearchbar_change}
        /> 
        :
        <Contact_List 
        openCloseForm={openCloseForm} 
        deleteContactsAll={deleteAll} 
        deleteCurrent={deleteCurrentContact} 
        contactData={contacts}
        searchbarLogic={handleSearchbar_change}
        /> 
      }

      <Form 
      handleChange={handleInputChange}
      handleSubmit={handleFormSubmit}
      values={inputs}
      openCloseForm={openCloseForm}
      checkIf_Open={isOpen}
      errors={errors}
      />
    </div>
  )
}

export default App
