import WithCounter from '../hoc/WithCounter'

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hovered: {count}</h2>
    </div>
  )
}

export default WithCounter(HoverCounter, 10)
