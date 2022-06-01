import React from 'react'
import { useCountAction } from '../Context/CountProvider'
import Product from '../Product/Product'
import { useProducts, useProductsActions } from '../Providers/ProductsProvider'
import styles from './productList.module.scss'

const ProductList = () => {
  const products = useProducts()
  const dispatch = useProductsActions()
  if (products.length === 0) return <div>There is no product in Card</div>
  else {
    return (
      <>
        {products.map((product) => {
          return (
            <Product
              onIncrement={() => dispatch({ type: 'increment', id: product.id })} // => onIncrement = {this.props.onIncrement}
              onDecrement={() => dispatch({ type: 'decrement', id: product.id })}
              onDelete={() => dispatch({ type: 'remove', id: product.id })}
              onChange={(e) => dispatch({ type: 'edit', id: product.id, event: e })}
              key={product.id}
              product={product}
            />
          )
        })}
        {/* <button className={styles.button} onClick={priceHandler}>
          change price
        </button> */}
      </>
    )
  }
}

export default ProductList

// Class Component
// =========================
// class ProductList extends React.Component {
//   render() {
//     const { products, onIncrement, onDecrement, onDelete, onChange, onClick } = this.props
//     if (products.length === 0) return <div>There is no product in Card</div>
//     return (
//       <>
//         {products.map((product) => {
//           return (
//             <Product
//               onIncrement={() => onIncrement(product.id)}  // => onIncrement = {this.props.onIncrement}
//               onDecrement={() => onDecrement(product.id)}
//               onDelete={() => onDelete(product.id)}
//               onChange={(e) => onChange(e, product.id)}
//               product={product}
//               key={product.id}
//             />
//           )
//         })}
//         <button className={styles.button} onClick={onClick}>
//           change price
//         </button>
//       </>
//     )
//   }
// }

// export default ProductList
