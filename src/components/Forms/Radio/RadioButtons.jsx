import RadioInput from "./RadioInput";

export default function RadioButtons({ setValue, value }) {
  const handleChange = (event) => {
    const radio = event.target.name;
    setValue((prevName) => ({ ...prevName, radio }));
  }
  return (
    <div className="radioButtons">
      <RadioInput
        type="radio"
        id="option1"
        name="option1"
        label="Option 1"
        checked={value.radio === 'option1'}
        onChange={handleChange}
      />
      <RadioInput
        type="radio"
        id="option2"
        name="option2"
        label="Option 2"
        checked={value.radio === 'option2'}
        onChange={handleChange}
      />
      <RadioInput
        type="radio"
        id="option3"
        name="option3"
        label="Option 3"
        checked={value.radio === 'option3'}
        onChange={handleChange}
      />
    </div>
  )
}