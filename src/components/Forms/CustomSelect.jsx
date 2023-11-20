export default function CustomSelect({ value, setValue }) {
  const selectOptions = [
    { id: 1, value: 'option 1' },
    { id: 2, value: 'option 2' },
    { id: 3, value: 'option 3' },
    { id: 4, value: 'option 4' },
    { id: 5, value: 'option 5' },
  ]
  const handleSelectChange = (event) => {
    const select = event.target.value;
    console.log(select);
    setValue((prev) => ({ ...prev, select }));
  };

  return (
    <div><label htmlFor="select">Select</label>
      <select
        type="select"
        name="select"
        id="select"
        onChange={handleSelectChange}
      >
        {selectOptions.map(item =>
          <option key={item.id}>{item.value}</option>
        )}
      </select>
    </div>
  )
}
