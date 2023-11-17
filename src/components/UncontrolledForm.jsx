import { useRef } from 'react'

export default function UncontrolledForm() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.firstName.value);
    console.log(event.target.email.value);

    formRef.current.reset();

  }


  return (
    <>
      <h2>Uncontrolled form</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
