import React, { useEffect } from 'react'
import { useProductsAndPointsStore } from '../../../store/productsAndPointsStore'

const History = () => {
    const getHistory = useProductsAndPointsStore(state => state.getHistory)
    const history = useProductsAndPointsStore(state => state.history)

    useEffect(() => {
        getHistory()
    },[])
   

  return (
    <div>
        <div className='flex justify-center p-8  flex-wrap h-auto w-full'>
            {history.map((product,index) => {
                return <div className='w-80 h-auto  ' key={index}>
                        <img src={product.img.url} />
                        <p>{product.createDate}</p>
                        <p>{product.cost}</p>
                    </div>
            })}
        </div>
    </div>
  )
}

export default History