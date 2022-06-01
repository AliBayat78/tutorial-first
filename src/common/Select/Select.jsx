import Select from 'react-select'
import styles from './Select.module.scss'

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={styles.filterContainer}>
      <span>{title}</span>
      <Select className={styles.select} {...rest} />
    </div>
  )
}

export default SelectComponent
