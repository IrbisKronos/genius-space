export default function RadioInput({ id, label, onChange, ...rest }) {
  return (
    <div className='radioInput'>
      <label htmlFor={id}>{label}</label>
      <input type='radio' id={id} onChange={onChange} {...rest} />
    </div>
  )
}
