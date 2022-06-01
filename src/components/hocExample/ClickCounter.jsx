import WithCounter from '../hoc/WithCounter'

const ClickCounter = ({ count, incrementCount, name }) => {
  console.log(name)
  return (
    <div>
      <h2 onClick={incrementCount}>clicked: {count}</h2>
    </div>
  )
}

export default WithCounter(ClickCounter, 5)
