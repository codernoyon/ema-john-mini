import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Header></Header>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          <Route path='/inventory' element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </HelmetProvider>
    </div>
  );
}

export default App;
