export default function TextInput({ id, label, value, setValue, objectKey, ...rest }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue((prevName) => ({ ...prevName, [objectKey]: newValue }));
  };

  return (
    <div className='textInput'>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={handleChange} value={value} {...rest} />
    </div>
  )
}
