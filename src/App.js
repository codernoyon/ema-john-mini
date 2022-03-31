import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
