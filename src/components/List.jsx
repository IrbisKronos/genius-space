import { useState } from 'react'



export default function List() {
  const initialValues = [
    { id: 1, name: 'First' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Third' },
    { id: 4, name: 'Forth' },
  ]
  const [input, setInput] = useState('');
  const [list, setList] = useState(initialValues);

  const onChangeHandler = (e) => {
    const updateInput = e.target.value;
    setInput(updateInput);
  }

  const onClickHandler = () => {
    const todoList = [...list, { id: 5, name: input }];
    setList(todoList);
    setInput('');
  }

  const onEnterHandler = (e) => {
    if (e.key === 'Enter') {
      const todoList = [...list, { id: 5, name: input }];
      setList(todoList);
      setInput('');
    }
  }

  const deleteHandler = (id) => {
    const filtered = list.filter(item => item.id !== id);
    setList(filtered);
  }

  return (
    <>
      <h1>Todo list</h1>
      <p>{list.length}</p>
      <input type='text' onChange={onChangeHandler} value={input} />
      <button onClick={onClickHandler}>Add</button>
      <ul>
        {/* {list.map((element) => (
          <ListItem
            key={element.id}
            id={element.id}
            name={element.name}>
            <Button
              text={'delete'}
              onClick={deleteHandler}
              type={'button'} />
          </ListItem>
        ))} */}
      </ul>
    </>
  )
}