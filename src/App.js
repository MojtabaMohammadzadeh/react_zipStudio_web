
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavBar from './MainNavBar/MainNavBar';
import HomePage from './HomePage/HomePage';
import Products from './Products/Products';
import Orders from './Order/Order';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';

function App() {
  return (
    <>
    <Router>
         <MainNavBar/>
       <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="products" element={<Products/>} />
         <Route path="orders" element={<Orders/>} />
         <Route path="aboutus" element={<AboutUs/>} />
         <Route path="contactus" element={<ContactUs/>} />
         
         </Routes>
         </Router>
    </>
  );
}

export default App;
