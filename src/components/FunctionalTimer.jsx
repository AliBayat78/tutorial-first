import { useEffect, useState } from 'react/cjs/react.development'

const FunctionalTimer = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
      console.log('slm')
    }, 1000)
    return () => {
      clearInterval(interval)
      console.log('cwum')
    }
  }, [])

  return <div>Functional Interval</div>
}

export default FunctionalTimer
