import { useEffect, useState } from 'react'
import { useProductsActions } from '../Providers/ProductsProvider'
import styles from './Filter.module.css'
import SelectComponent from '../../common/Select/Select'
import SearchBar from '../../common/Search/Search'

const filterOptions = [
  { value: '', label: 'All' },
  { value: 'XS', label: 'XS' },
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: 'XXL', label: 'XXL' },
]

const sortOptions = [
  { value: 'lowest', label: 'lowest' },
  { value: 'highest', label: 'highest' },
]

const Filter = () => {
  const dispatch = useProductsActions()
  const [filter, setFilter] = useState('')
  const [sort, setPrice] = useState('')

  useEffect(() => {
    setFilter(filterOptions[0])
  }, [])

  const filterHandler = (selectedOptions) => {
    dispatch({ type: 'filter', selectedOptions })
    dispatch({ type: 'sort', selectedOptions: sort })
    setFilter(selectedOptions)
  }

  const sortHandler = (selectedOptions) => {
    dispatch({ type: 'sort', selectedOptions })
    setPrice(selectedOptions)
  }

  return (
    <section className={styles.filter}>
      <SearchBar filter={filter} />
      <div className={styles.selectContainer}>
        <p>Filter Products Base on: </p>
        <SelectComponent
          title="sort by price"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
        <SelectComponent
          title="order by size"
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />
      </div>
    </section>
  )
}

export default Filter
