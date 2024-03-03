import React, {useState} from "react"
import arrowLeft from "../../../../assets/icons/arrow-left.svg"
import arrowRight from "../../../../assets/icons/arrow-right.svg"
import { useProductsAndPointsStore } from "../../../../store/productsAndPointsStore"

const Filters = () => {
    
    const mostRecent = useProductsAndPointsStore(state => state.mostRecent)
    const lowestPrice = useProductsAndPointsStore(state => state.lowestPrice)
    const highestPrice = useProductsAndPointsStore(state => state.highestPrice)
   
    return (
        <section className='flex justify-between pb-5 border-b border-gray-300'>
            <div className='flex gap-5'>

                <h3 className='text-xl text-gray-600 font-semibold divide-black '>32 of 32 products</h3>
                <span className='border-r text-gray-900' />
                <p className=' text-xl font-normal text-gray-400'>Sort by:</p>

                <div className='flex text-xl gap-6 text-white items-center font-medium '> 
                    <button onClick={ mostRecent } className='bg-sky-500 rounded-full py-2 px-6'>Most recent</button>
                    <button onClick={ lowestPrice } className='bg-gray-200 rounded-full py-2 px-6'>Lowest price</button>
                    <button onClick={ highestPrice } className='bg-gray-200 rounded-full py-2 px-6'>Highest price</button>
                </div> 

            </div>
           

            <div className='flex '>
                <img src={arrowLeft} />
                <img src={arrowRight} />
            </div>

        </section>
    )
}

export default Filters
