export default function Checkbox({ id, label, setValue, checked, ...rest }) {
  const handleCheckboxChange = (event) => {
    const checkbox = event.target.checked;
    setValue((prevEmail) => ({ ...prevEmail, checkbox }));
  }
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} onChange={handleCheckboxChange} checked={checked} {...rest} />
    </div>

  )
}
