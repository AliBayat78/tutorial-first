import { useState } from 'react'
import styles from './search.module.scss'
import { useProductsActions } from '../../components/Providers/ProductsProvider'

const SearchBar = ({ filter }) => {
  const dispatch = useProductsActions()
  const [value, setValue] = useState('')

  const changeHandler = (e) => {
    dispatch({ type: 'filter', selectedOptions: filter })
    dispatch({ type: 'search', event: e })
    setValue(e.target.value)
  }

  return (
    <div className={styles.container}>
      <p>Search For : </p>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for ..."
        value={value}
        onChange={changeHandler}
      />
    </div>
  )
}

export default SearchBar
