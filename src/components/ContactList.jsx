import { useEffect, useState } from 'react'
import axios from 'axios';
import { useFetch } from '../hooks/useFetch';

axios.defaults.baseURL = "http://localhost:3030/";

export default function ContactList() {
  const [data, setData] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isPut, setIsPut] = useState(false);

  const { data: contacts, isLoading, error } = useFetch('contacts');

  useEffect(() => {
    setData(contacts);
  }, [contacts]);

  const addContact = async () => {
    setIsPostLoading(true);
    const payload = {
      "name": "Gector",
      "lastName": "Potter",
      "about": "Lorem, dolor sit amet consectetur elit."
    };
    const response = await axios.post('contacts', payload);
    setData(prev => [...prev, response.data]);
    setIsPostLoading(false);
  }

  const deleteContact = async (id) => {
    setIsDelete(true);
    await axios.delete(`contacts/${id}`);
    setData(prev => prev.filter(item => item.id !== id));
    setIsDelete(false);
  }

  const editContact = async (id) => {
    const payload = {
      "name": "Ahilles",
      "lastName": "Potter",
      "about": "Lorem, dolor sit amet consectetur elit."
    };
    setIsPut(true);
    const response = await axios.put(`contacts/${id}`, payload);
    setData(prev => prev.map(item => {
      if (item.id === id) {
        return response.data;
      }
      return item;
    }
    ));
    setIsPut(false);
  }

  if (error) {
    return <div>Something went wrong: {error}</div>
  }

  return (
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
            : data?.map(contact =>
              <li key={contact.id}>
                <p>{contact.name}{' '}{contact.lastName}</p>
                <button
                  disabled={isDelete}
                  onClick={() => deleteContact(contact.id)}                >
                  {isDelete ? 'Loading...' : 'Delete contact'}
                </button>

                <button
                  disabled={isPut}
                  onClick={() => editContact(contact.id)}>
                  {isPut ? 'Loading...' : 'Edit'}
                </button>
              </li>
            )
          }
        </ul>
        <button
          disabled={isPostLoading}
          onClick={addContact}        >
          {isPostLoading ? 'Loading...' : 'Add contact'}
        </button>
      </main>
    </div>
  )
}
