import { useState } from 'react'
import Checkbox from './Checkbox';
import TextInput from './TextInput';
import RadioButtons from './Radio/RadioButtons';
import InputData from '../InputData';
import CustomSelect from './CustomSelect';

export default function ControlledForm() {
  const [value, setValue] = useState({
    firstName: '',
    email: '',
    checkbox: false,
    radio: '',
    select: 'option 1',
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
          name="name"
          id="name"
          setValue={setValue}
          value={value.name}
          label="Name"
          objectKey="firstName"
        />
        <TextInput
          type="text"
          name="email"
          id="email"
          setValue={setValue}
          value={value.email}
          label="Email"
          objectKey="email"
        />
        <Checkbox
          id="checkbox"
          label="Checkbox"
          setValue={setValue}
          checked={value.checkbox}
        />
        <CustomSelect value={value} setValue={setValue} />
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
