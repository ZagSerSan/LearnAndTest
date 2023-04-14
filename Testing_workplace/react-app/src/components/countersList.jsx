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

  //todo
  function handleIncrement(id) {
    setCounters(counters.map(item => {
      return ({
        ...item,
        value: item.id === id ? item.value += 1 : item.value
      })
    }))
  }
  function handleDecrement(id) {
    setCounters(counters.map(item => {
      return ({
        ...item,
        value: item.id === id ? item.value -= 1 : item.value
      })
    }))
  }

  return <>
    {counters.map(count => 
      <Counter
        key={count.id}
        value={count.value}
        name={count.name}
        onDelete={()=>handleDelete(count.id)}
        onIncrement={()=>handleIncrement(count.id)}
        onDecrement={()=>handleDecrement(count.id)}
      />
    )}
    <button className="btn btn-primary btn-sm m-1" onClick={handleClear}>clear</button>
  </>
}

export default CountersList