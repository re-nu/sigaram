import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import { Page } from './Page';
import { Cart } from './Cart';

function App() {
  const [product,setproduct]=useState([])

  async function getproduct(){
    const data=await fetch("https://fakestoreapi.com/products")
    const prdct=await data.json();
    console.log(prdct)
    setproduct(prdct)
  }

  useEffect(getproduct,[])

  return (
    <div className="App">
      <CartProvider>
      <Route exact path="/"><Page /></Route>
      <Route path="/cart"><Cart /></Route>
    </CartProvider>
    </div>
  );
}

export default App;
