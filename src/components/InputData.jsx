export default function InputData({ value }) {
  return (
    <div>
      <p>First Name: {value.firstName}</p>
      <p>Email: {value.email}</p>
      <p>Checkbox: {value.checkbox.toString()}</p>
      <p>Radio: {value.radio}</p>
      <p>Select: {value.select}</p>
    </div>
  )
}
