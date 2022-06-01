import ProductList from './components/ProductList/ProductList'
import React, { useState } from 'react'
import './styles/App Styles/App.scss'
import Navbar from './components/Navbar/Navbar'
import HookCounter from './components/HookCounter'
import ClassCounter from './components/ClassCounter'
import HookObject from './components/HookObject'
import ClassObject from './components/ClassObject'
import HooksArray from './components/HookArray'
import ClassArray from './components/ClassArray'
import FunctionalCounter from './components/FunctionalCounter'
import ClassTimer from './components/ClassTimer'
import FunctionalTimer from './components/FunctionalTimer'
import Wrapper from './components/hoc/Wrapper'
import ClickCounter from './components/hocExample/ClickCounter'
import HoverCounter from './components/hocExample/HoverCounter'
import ParentComp from './components/PureMemoComp/ParentComp'
import ClassRef from './components/ref/ClassRef'
import FunctionalRef from './components/ref/FunctionalRef'
import CountProvider from './components/Context/CountProvider'
import CountOne from './components/Context/CountOne'
import CountReducer from './components/Reducer/CountReducer'
import ProductsProvider from './components/Providers/ProductsProvider'
import Filter from './components/Filter/Filter'
import SearchBar from './common/Search/Search'

const App = () => {
  return (
    <ProductsProvider>
      <Navbar />
      <Filter />
      <h1>shopping App</h1>
      <ProductList />
    </ProductsProvider>
  )
}

// class App extends React.Component {
//   state = {
//     products: [
//       { id: 1, title: 'React.js', price: '22$', quantity: 1 },
//       { id: 2, title: 'Node.js', price: '11$', quantity: 2 },
//       { id: 3, title: 'JavaScript', price: '55$', quantity: 3 },
//       { id: 4, title: 'JavaScript', price: '55$', quantity: 3 },
//     ],
//     count: 0,
//     isShow: true,
//   }

//   render() {
//     console.log(this.props)
//     // const { products, count } = this.state
//     const { products } = this.state
//     return (
//       // ============ for CWUM

//       // <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
//       //   {this.state.isShow ? 'Hide' : 'Show'}
//       // </button>
//       // {this.state.isShow && <FunctionalTimer />}

//       // {/* Our App */}
//       <>
//         {/* ==== context Folder */}
//         {/* <CountProvider>
//           <p>Welcome to context</p>
//           <CountOne />
//         </CountProvider> */}
//         {/* =============== */}
//         {/* <FunctionalRef /> */}
//         {/* <ClassRef /> */}

//         <Navbar totalItems={products.filter((i) => i.quantity > 0).length} />
//         <h1>shopping App</h1>
//         <ProductList
//           products={products}
//           onClick={this.priceHandler}
//           onIncrement={this.incrementHandler} // => onIncrement = {() => this.incrementHandler(this.state.products.id)}
//           onDelete={this.removeHandler}
//           onDecrement={this.decrementHandler}
//           onChange={this.changeNameHandler}
//         />
//       </>
//     )
//   }
// }

// =============================================== Functional App

// const App = () => {
//   const [products, setProducts] = useState([
//     { title: 'React.js', price: '22$' },
//     { title: 'Node.js', price: '11$' },
//     { title: 'JavaScript', price: '55$' },
//   ])

//   const priceHandler = () => {
//     setProducts([
//       { title: 'React.js', price: '2$' },
//       { title: 'Node.js', price: '2$' },
//       { title: 'JavaScript', price: '2$' },
//     ])
//   }

//   return (
//     <div className="container" id="title">
//       <h1>shopping App</h1>
//       {products.map((product) => {
//         return <Product name={product.title} price={product.price} />
//       })}
//       <button onClick={priceHandler}>change price</button>
//     </div>
//   )
// }

// ====================================================== for Extra Files in Component Folder

// function App() {

//   return (
//     <div>
//       {/* =================================== */}
//       {/* <HookCounter /> */}
//       {/* <ClassCounter /> */}
//       {/* <FunctionalCounter /> */}
//       {/* <HookObject /> */}
//       {/* <ClassObject /> */}
//       {/* <HooksArray /> */}
//       {/* <ClassArray /> */}
//       {/* =================================== */}
//     </div>
//   )
// }

export default Wrapper(App, 'container')
