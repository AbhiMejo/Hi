import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import UserLogin from './Components/UserLogin';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import StoreDetails from './Components/StoreDetails';
import ViewStore from './Components/ViewStore';
import ModifyStore from './Components/ModifyStore';
import Home from './Components/Home';
import SearchStore from './Components/SearchStore';
import UserViewStore from './Components/UserViewStore';
import VcdDetails from './Components/VcdDetails';
import ModifyVcd from './Components/ModifyVcd';
import ViewVcd from './Components/ViewVcd';
import UserViewVcd from './Components/UserViewVcd';
import UserViewCart from './Components/UserViewCart';
import ModifyCart from './Components/ModifyCart';
import DeleteCart from './Components/DeleteCart';
import Payment from './Components/Payment';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/login' element={<UserLogin/>}></Route>
        <Route path='/view' element={<User/>}></Route>
        <Route path='/admin' element={<AdminLogin/>}></Route>
        <Route path='/addStore' element={<StoreDetails/>}></Route>
        <Route path='/viewStore' element={<ViewStore/>}></Route>
        <Route path='/modifyStore/:storeId' element={<ModifyStore/>}></Route>
        {/* <Route path="/userViewStore/:storeData" component={UserViewStore} />
        <Route path='/searchStore' element={<SearchStore/>}></Route> */}

        <Route path="/searchStore" element={<SearchStore />} />
        <Route path="/userViewStore/:storeData" element={<UserViewStore />} />
        
        <Route path='/addVcd' element={<VcdDetails/>}></Route>
        <Route path='/modifyVcd/:vcdId' element={<ModifyVcd/>}></Route>
        <Route path='/viewVcd' element={<ViewVcd/>}></Route>
        <Route path='/userViewVcd/:storeId' element={<UserViewVcd/>}></Route>
        <Route path='/userViewCart' element={<UserViewCart/>}></Route>
        <Route path='/modifyCart/:cartId' element={<ModifyCart/>}></Route>
        <Route path='/deleteCart/:cartId' element={<DeleteCart/>}></Route>
        <Route path='/payment/:totalCost' element={<Payment/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
