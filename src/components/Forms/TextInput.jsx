export default function TextInput({ id, label, value, setValue, ...rest }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue((prevName) => ({ ...prevName, [id]: newValue }));
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={handleChange} value={value} {...rest} />
    </div>
  )
}
