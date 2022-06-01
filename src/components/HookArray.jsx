import { useState } from 'react'

const HooksArray = () => {
  const [item, setItem] = useState([])

  const addItemHandler = () => {
    setItem([...item, { id: item.length, number: Math.floor(Math.random() * 10) }])
  }

  return (
    <div>
      <h2>
        items:
        {item.map((item) => {
          return (
            <li key={item.id}>
              {item.number} & id: {item.id}
            </li>
          )
        })}
      </h2>
      <button onClick={addItemHandler}>add item</button>
    </div>
  )
}

export default HooksArray
