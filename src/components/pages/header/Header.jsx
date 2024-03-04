import React from 'react'
import logo from "../../../assets/logo.svg"
import coin from "../../../assets/icons/coin.svg"
import { useProductsAndPointsStore } from '../../../store/productsAndPointsStore'
import { Link } from 'react-router-dom'

const Header = () => {
    
    const userData = useProductsAndPointsStore(state => state.userData)
    const points = useProductsAndPointsStore(state => state.points)
    const addPoints = useProductsAndPointsStore(state => state.addPoints)


  return (
    <div className='sticky top-0 z-10 bg-white shadow-md w-full'>
        <header  className="container mx-auto py-5 flex justify-between">
                <img src={logo} className='mr-4' alt='logo' />
               <Link to={`/`}>
                    <button>Home</button>
               </Link>
              
               <Link to={`/history`}>
                    <button>History</button>
               </Link>
               

                <nav className='flex gap-10 text-xl text-zinc-500 font-medium' >
                    <h2 className=''>{userData.name}</h2>
                    <div onClick={() => addPoints(1000)} className='flex mr-4 gap-1 text-center cursor-pointer'>
                       
                        <p>{userData.points}</p>
                        <img src={coin} />
                    </div>
                    
                </nav>
        </header>
    </div>
  
  )
}

export default Header