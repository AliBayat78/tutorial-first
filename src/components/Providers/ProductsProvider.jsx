import React, { Component, createContext } from 'react'
import { useContext, useReducer, useState } from 'react/cjs/react.development'
import { productsData } from '../db/products'
import _ from 'lodash'

const ProductContext = createContext()
const ProductContextDispatcher = createContext()

// const initialState = [
//   { id: 1, title: 'React.js', price: '22$', quantity: 1 },
//   { id: 2, title: 'Node.js', price: '11$', quantity: 2 },
//   { id: 3, title: 'JavaScript', price: '55$', quantity: 3 },
//   { id: 4, title: 'Js', price: '55$', quantity: 3 },
// ]
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      const index = state.findIndex((item) => item.id === action.id)
      const product = { ...state[index] }
      product.quantity++
      const updatedProducts = [...state]
      updatedProducts[index] = product
      return updatedProducts
    }
    case 'decrement': {
      const index = state.findIndex((item) => item.id === action.id)

      const product = { ...state[index] }
      product.quantity--

      const updatedProducts = [...state]
      updatedProducts[index] = product

      if (product.quantity < 1) {
        const newProducts = updatedProducts.filter((item) => item.id !== action.id)
        return newProducts
      } else {
        return updatedProducts
      }
    }
    case 'edit': {
      const index = state.findIndex((item) => item.id === action.id)
      const product = { ...state[index] }
      product.title = action.event.target.value
      const updatedProducts = [...state]
      updatedProducts[index] = product
      return updatedProducts
    }
    case 'remove': {
      const updatedProducts = state.filter((item) => item.id !== action.id)
      return updatedProducts
    }

    case 'filter': {
      const value = action.selectedOptions.value
      if (value === '') {
        return productsData
      } else {
        const updatedProducts = productsData.filter((p) => p.availableSizes.indexOf(value) >= 0)
        return updatedProducts
      }
    }

    case 'sort': {
      const value = action.selectedOptions.value
      const products = [...state]
      if (value === 'lowest') {
        return _.orderBy(products, ['price'], ['asc'])
      } else {
        return _.orderBy(products, ['price'], ['desc'])
      }
    }

    case 'search': {
      const value = action.event.target.value
      if (value === '') {
        return state
      } else {
        const filteredProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase()),
        )
        return filteredProducts
      }
    }
    default:
      return state
  }
}

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData)

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  )
}

export default ProductsProvider

export const useProducts = () => useContext(ProductContext)
export const useProductsActions = () => {
  return useContext(ProductContextDispatcher)

  // const removeHandler = (id) => {
  //   const updatedProducts = products.filter((item) => item.id !== id)
  //   setProducts(updatedProducts)
  // }

  // const incrementHandler = (id) => {
  //   // 1- id
  //   // 2- index
  //   const index = products.findIndex((item) => item.id === id)

  //   // 3- clone the selected item and update qty:
  //   const product = { ...products[index] }
  //   product.quantity++

  //   // 4- update products
  //   const updatedProducts = [...products]
  //   updatedProducts[index] = product
  //   setProducts(updatedProducts)
  // }

  // const decrementHandler = (id) => {
  //   // 1- id
  //   // 2- index
  //   const index = products.findIndex((item) => item.id === id)

  //   // 3- clone the selected index and update the qty:
  //   const product = { ...products[index] }
  //   product.quantity--

  //   // 4- update products
  //   const updatedProducts = [...products]
  //   updatedProducts[index] = product

  //   if (product.quantity < 1) {
  //     const newProducts = updatedProducts.filter((item) => item.id !== id)
  //     setProducts(newProducts)
  //   } else {
  //     setProducts(updatedProducts)
  //   }
  // }

  // const changeNameHandler = (event, id) => {
  //   // 1-id
  //   // 2-index
  //   const index = products.findIndex((item) => item.id === id)

  //   // 3- clone the selected item and update the title:
  //   const product = { ...products[index] }
  //   product.title = event.target.value

  //   // 4- update products
  //   const updatedProducts = [...products]
  //   updatedProducts[index] = product
  //   setProducts(updatedProducts)
  // }

  // const priceHandler = () => {
  //   setProducts([
  //     { id: 1, title: 'sss.js', price: '222$', quantity: 1 },
  //     { id: 2, title: 'Node.js', price: '131$', quantity: 2 },
  //     { id: 3, title: 'JavaScript', price: '55$', quantity: 3 },
  //     { id: 4, title: 'JavaScript', price: '55$', quantity: 3 },
  //   ])
  // }
}
