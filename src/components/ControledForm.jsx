import { useCallback, useEffect, useRef, useState } from 'react'

export default function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.firstName.value);
    console.log(event.target.email.value);
  }

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
  }

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  }


  return (
    <>
      <h2>Controlled form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" onChange={handleNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleEmailChange} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>First Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </>
  )
}
