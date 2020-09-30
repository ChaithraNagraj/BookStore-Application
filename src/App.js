import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

// import MyCart from './components/cart/MyCart';
import Login from './components/user/Login';
import Registration from './components/user/Registration';
import OrderSummary from './components/cart/OrderSummary';
// import cart from './components/cart/cart';
import Coupon from './components/cart/Coupon';
import Abcart from './components/cart/Abcart'
import OrderPlaced from './components/cart/OrderPlaced'
import {BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Resetpassword from './components/user/ResetPassword';
import Logout from './components/user/Logout';
import Header from './components/header/Header';
import profile from './components/Profile/profile';
import editProfile from './components/EditProfile/editProfile';
import review from './components/cart/review';
import reviewForBook from './components/cart/reviewForBook';
function App() {
  return (
  <Router>
  <Switch>
   <Route path='/BookstoreApplication' component={Dashboard} />
   <Route path='/Login' component={Login}/>
   <Route path='/Registration' component={Registration}/>
   <Route path='/ResetPassword' component={Resetpassword}/>  
   <Route path='/Abcart' component={Abcart}/>
   <Route path='/OrderSummary' component={OrderSummary}/>
   <Route path='/OrderPlaced' component={OrderPlaced}/>
   <Route path='/profile' component={profile}/>
   <Route path ='/Logout' component={Logout}/>
   <Route path='/editProfile' component={editProfile}/>
   <Route path='/review' component={review}/>
   <Route path='/Coupon' component={Coupon}/>
   <Route path='/reviewForBook' component={reviewForBook}/>
   </Switch>
   </Router>
  );
}

export default App;
