import React, { useEffect } from 'react'
import { useProductsAndPointsStore } from '../../../store/productsAndPointsStore'
import coin from "../../../assets/icons/coin.svg"
const History = () => {
    const getHistory = useProductsAndPointsStore(state => state.getHistory)
    const history = useProductsAndPointsStore(state => state.history)

    useEffect(() => {
        getHistory()
    },[])
 
    console.log(history)
  return (
    <div>
        <div className='flex justify-center p-8 gap-8 flex-wrap h-auto w-full'>
            {history.map((product,index) => {
                return <div className='w-80 h-auto  ' key={index}>
                        <img src={product.img.url} />
                        <p>{new Date(product.createDate).toLocaleDateString()}</p>
                        <div className='flex items-center'>
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