import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import Header from "../components/pages/header/Header";
import { useProductsAndPointsStore } from "../store/productsAndPointsStore";
import Home from "../components/common/home/Home";
import History from "../components/pages/history/History";


const App = () => {
  const getUserData = useProductsAndPointsStore(state => state.getUserData)
  const loading  = useProductsAndPointsStore(state => state.loading)
  const getProducts = useProductsAndPointsStore(state => state.getProducts)
  
  useEffect(() => {
    getUserData()
    getProducts()
  }, [])


  return (
    <>
     <BrowserRouter> 
        {loading &&  <div className="flex items-center justify-center h-screen">
                                    <SpinnerCircular  className="h-full text-center w-full "  />
                     </div>
        }
    <Header />
    <Routes>
       <Route path="/" element={<Home />}  />
       <Route path="/history" element={<History />} />
     </Routes>
    </BrowserRouter>
    </>
  
  );
};

export default App;
