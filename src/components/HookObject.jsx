import { useState } from 'react'

const HookObject = () => {
  const [user, setUser] = useState({ firstName: '', lastName: '' })

  const changeNameHandler = (e) => {
    setUser({ ...user, firstName: e.target.value })
  }

  const changeLastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value })
  }
  return (
    <form>
      <input type="text" value={user.firstName} onChange={changeNameHandler} />
      <h2>my name is: {user.firstName}</h2>
      <input type="text" value={user.lastName} onChange={changeLastNameHandler} />
      <h2>my lastname is : {user.lastName}</h2>
    </form>
  )
}

export default HookObject
