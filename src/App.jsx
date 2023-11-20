import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import ControlledForm from './components/Forms/ControledForm';
import UncontrolledForm from './components/Forms/UncontrolledForm';
import { getContactList } from './api/api';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true)
    const data = await getContactList();
    setIsLoading(false);
    setContacts(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(contacts);

  return (
    <>
      {/* <UncontrolledForm />
      <ControlledForm /> */}
      <div>
        <header>
          <h1>
            Contacts
          </h1>
        </header>
        <main>
          <ul>
            {isLoading
              ? <div>Loading...</div>
              : contacts.map(contact =>
                <li key={contact.id}>
                  {contact.name}{' '}{contact.lastName}
                </li>)}
          </ul>
        </main>
      </div>
    </>
  )
}
