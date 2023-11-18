import { useState } from 'react'
import Checkbox from './Checkbox';
import TextInput from './TextInput';
import RadioButtons from './Radio/RadioButtons';
import InputData from '../InputData';

export default function ControlledForm() {
  const [value, setValue] = useState({
    firstName: '',
    email: '',
    checkbox: false,
    radio: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <h2>Controlled form</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="firstName"
          id="firstName"
          setValue={setValue}
          value={value.name}
          label="Name"
        />
        <TextInput
          type="email"
          name="email"
          id="email"
          setValue={setValue}
          value={value.email}
          label="Email"
        />
        <Checkbox
          id="checkbox"
          label="Checkbox"
          setValue={setValue}
          checked={value.checkbox}
        />
        <RadioButtons
          setValue={setValue}
          value={value}
        />
        <button type="submit">Submit</button>
      </form>
      <InputData value={value} />
    </>
  )
}
