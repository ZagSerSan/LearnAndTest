import React,{useState} from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    {id: 0, value: 0, name: 'Ненужная вещь'},
    {id: 1, value: 4, name: 'Ложка'},
    {id: 2, value: 0, name: 'Вилка'},
    {id: 3, value: 0, name: 'Тарелка'},
    {id: 4, value: 0, name: 'Набор минималиста'}
  ]
  const [counters, setCounters] = useState(initialState)
  
  const handleDelete = (id) => {
    setCounters(prevState => 
      prevState.filter(item => item.id !== id)
    )
  }
  const handleClear = () => {
    setCounters(initialState)
  }
  const testUpdValue = () => {
    const updatedlState = [
      {id: 0, value: 1, name: 'Ненужная вещь'},
      {id: 1, value: 4, name: 'Ложка'},
      {id: 2, value: 3, name: 'Вилка'},
      {id: 3, value: 6, name: 'Тарелка'},
      {id: 4, value: 9, name: 'Набор минималиста'}
    ]
    setCounters(updatedlState)
  }

  return <>
    {counters.map(count => 
      <Counter
        key={count.id}
        value={count.value}
        name={count.name}
        onDelete={()=>handleDelete(count.id)}
      />
    )}
    <button className="btn btn-primary btn-sm m-1" onClick={handleClear}>clear</button>
    <button className="btn btn-primary btn-sm m-1" onClick={testUpdValue}>update</button>
  </>
}

export default CountersList