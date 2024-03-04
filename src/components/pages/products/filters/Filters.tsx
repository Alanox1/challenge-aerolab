import React, {useState} from "react"
import arrowLeft from "../../../../assets/icons/arrow-left.svg"
import arrowRight from "../../../../assets/icons/arrow-right.svg"
import { useProductsAndPointsStore } from "../../../../store/productsAndPointsStore"

const Filters = () => {
    
    const [ isSelected, setIsSelected ] = useState(1)

    const mostRecent = useProductsAndPointsStore(state => state.mostRecent)
    const lowestPrice = useProductsAndPointsStore(state => state.lowestPrice)
    const highestPrice = useProductsAndPointsStore(state => state.highestPrice)
   

    const handleClickMostRecent = ( ) => {
        mostRecent()
        setIsSelected(1)
    }
    
    const handleClickLowestPrice = ( ) => {
        lowestPrice()
        setIsSelected(2)
    }

    const handleClickHighestPrice = ( ) => {
        highestPrice()
        setIsSelected(3)
    }
    return (
        <section className='flex justify-between pb-5 border-b border-gray-300'>
            <div className='flex gap-5'>

                <h3 className='text-xl text-gray-600 font-semibold divide-black '>32 of 32 products</h3>
                <span className='border-r text-gray-900' />
                <p className=' text-xl font-normal text-gray-400'>Sort by:</p>

                <div className='flex text-xl gap-6 text-white items-center font-medium '> 
                    <button onClick={() => handleClickMostRecent()} className={`rounded-full py-2 px-6 ${isSelected === 1 ? "bg-sky-500" : "bg-gray-200"}`}>Most recent</button>
                    <button onClick={() => handleClickLowestPrice()} className={`rounded-full py-2 px-6 ${isSelected === 2 ? "bg-sky-500" : "bg-gray-200"}`}>Lowest price</button>
                    <button onClick={() => handleClickHighestPrice() } className={`rounded-full py-2 px-6 ${isSelected === 3 ? "bg-sky-500" : "bg-gray-200"}`}>Highest price</button>
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
