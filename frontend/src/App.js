
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Medicines from './Medicines';
import Test from './Test';
import Details from './Details';
import Cart from './Cart';
import CartDetails from './CartDetails';
import Consult from './Consult';
import Cancer from './Cancer';
import Lab from './Lab';
import AboutUs from './AboutUs';
import SearchResults from './SearchResults';
import MembershipOptions from './MembershipOptions.js';

function App() {
  const userId = 'user123';
  const cartDetails = [
    { itemName: 'Dolo 650 Tablet', price: 29 },
    { itemName: 'Cofsils', price: 29 },
  ];

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Medicines" element={<Medicines />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Details" element={<Details />} />
          
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CartDetails" element={<CartDetails />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/Cancer" element={<Cancer />} />
          <Route path="/Lab" element={<Lab />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/membershipoptions" element={<MembershipOptions userId={userId} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
