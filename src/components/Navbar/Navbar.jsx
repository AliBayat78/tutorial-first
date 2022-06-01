import { useProducts } from '../Providers/ProductsProvider'
import styles from './navbar.module.scss'

const Navbar = () => {
  const products = useProducts()
  const totalItems = products.filter((i) => i.quantity > 0).length

  return (
    <nav className={styles.nav}>
      <h4>Number of Products: </h4>
      <span>{totalItems}</span>
    </nav>
  )
}

export default Navbar
