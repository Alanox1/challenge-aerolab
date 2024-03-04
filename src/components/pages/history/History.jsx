import React, { useEffect } from 'react'
import { useProductsAndPointsStore } from '../../../store/productsAndPointsStore'
import coin from "../../../assets/icons/coin.svg"
const History = () => {
    const getHistory = useProductsAndPointsStore(state => state.getHistory)
    const history = useProductsAndPointsStore(state => state.history)

    useEffect(() => {
        getHistory()
    },[])
  
    
  return (
    <div>
        <div className='flex justify-center p-8 gap-8 flex-wrap h-auto w-full '>
            {history.map((product,index) => {
                return <div className='w-80 h-auto border-solid border-orange-300 border-2 p-2  ' key={index}>
                            <img src={product.img.url} />
                            <h1 className='text-2xl'>{product.name}</h1>
                            <p className='text-xl pt-2 pb-2'>{new Date(product.createDate).toLocaleDateString()}</p>
                            <div className='flex items-center text-xl'>
                                <img src={coin} />
                                <p>{product.cost}</p>
                            </div>  
                    </div>
            })}
        </div>
    </div>
  )
}

export default History