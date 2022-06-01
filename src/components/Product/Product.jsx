import styles from './product.module.scss'
import { BiTrash } from 'react-icons/bi'

const Product = ({ click, product, onDelete, onChange, onIncrement, onDecrement }) => {
  return (
    <div className={styles.product} onClick={click}>
      <h4>Product name: {product.title}</h4>
      <p>Product Price: {product.price}</p>
      <button className={styles.deleteBtn} onClick={onDelete}>
        Delete
      </button>
      {/* <input className={styles.input} type="text" value={product.title} onChange={onChange} /> */}
      <span className={styles.value}>{product.quantity}</span>
      <button className={`${styles.button} ${styles.increment}`} onClick={onIncrement}>
        +
      </button>
      <button
        className={`${styles.button} ${styles.decrement} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity === 1 ? <BiTrash /> : '-'}
      </button>
    </div>
  )
}

export default Product
