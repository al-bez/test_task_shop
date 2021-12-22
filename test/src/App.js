import React, {useState} from 'react';
import AppCSS from './App.module.css';
import Main from './components/Main/Main';
import Categories from './components/Categories/Categories';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import products from './datas/clothing.js';
//localStorage.clear()
const setShop = (data = []) => {
  try {
    localStorage.setItem('shopping', JSON.stringify(data))
  } catch (e) {
    alert(e.message)
  }
}

const getShop = () => {
  try {
    return JSON.parse(localStorage.getItem('shopping')) || []
  } catch (e) {
    alert(e.message)
    return [];
  }
}

function App() {
  const [shopping,setShopping] = useState(getShop)

  const addPurchase = (id) => {
    const [newPurchase] = products.filter(item => item.id ===id)
    const updateShopping = [...shopping, {...newPurchase, id:Date.now()}]
    setShopping(updateShopping)
    setShop(updateShopping)
  }

  console.log(shopping);

  const deleteItem = (id) => {
      const updateShopping = shopping.filter(product => product.id !== id)
      setShopping(updateShopping)
    setShop(updateShopping)
  }
  return (
        <Router>
          <div className={AppCSS.wrapper}>
            <Routes>
              <Route exact path='/' element={<Categories clothing={products} addPurchase={addPurchase}/>} />
              <Route exact path='/ab' element={<Main clothing={shopping} deleteItem={deleteItem}/>} />
            </Routes>
          </div>
        </Router>
  );
}

export default App;
