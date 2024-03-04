import React, {useState} from 'react'
import coin from "../../../../assets/icons/coin.svg"
import buyBlue from "../../../../assets/icons/buy-blue.svg"
import buyWhite from "../../../../assets/icons/buy-white.svg"
import { useProductsAndPointsStore } from '../../../../store/productsAndPointsStore'

const Product = ( {product} ) => {

  const [mostrarPrecio, setMostrarPrecio] = useState(false);
  const userData = useProductsAndPointsStore(state => state.userData)
  const reedem = useProductsAndPointsStore(state => state.reedem)
  const result = Number(product.cost) - Number(userData.points)
  const loadingProduct = useProductsAndPointsStore(state => state.loadingProduct)
  const setLoadingProduct = useProductsAndPointsStore(state => state.setLoadingProduct)
 

  const handleBuyClick = () => {
   
    setLoadingProduct(true);
    

    setTimeout(() => {
      setLoadingProduct(false);
  
    }, 2000);
  };


  return (
    <>
    <article key={product._id} 
             className={`bg-white relative p-6 shadow-3xl ${mostrarPrecio && "bg-cyan-500 relative"}`}
             onMouseEnter={() => setMostrarPrecio(true)}
             onMouseLeave={() => setMostrarPrecio(false)}
    >           
                <img src={buyBlue} className='absolute top-0 right-0 z-40 p-3' />   
             
               
                <figure className='border-b border-gray-400 '>
                    <img src={product.img.url} className='w-full h-auto'/>
                </figure>
                
                <div className='mt-4'>
                    <h3 className='text-sm text-gray-400'>{product.category}</h3>
                    <p className='text-gray-500 font-semibold'>{product.name}</p>
                </div>

               


              {result > 0
               ? <div className='flex absolute top-0 right-0 z-40 bg-gray-500 text-white py-1 px-3 rounded-full mt-3'>
                      <p>you need {result}</p>
                      <img src={coin} />
                </div>
               : mostrarPrecio &&  
                <div className='top-0 bottom-0 left-0 right-0 bg-cyan-400 z-40 opacity-100 absolute flex justify-center           items-center flex-col text-white' >              
                <img src={buyWhite} className='absolute top-0 right-0 z-40 p-3'  />
                      <div className='flex items-center justify-center'>
                            <p className='text-3xl mr-2'>{product.cost}</p>
                            <img src={coin} />
                      </div>
                      <button
                      className={`rounded-full bg-white text-gray-600 w-52 py-2 mt-4 ${loadingProduct ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={loadingProduct}
                          onClick={() => {
                          handleBuyClick()
                          reedem(product)
                          
                          }}
                          
                         
                      >
                        {loadingProduct ? "Espere un momento..." : "Redeem now"}
                      </button>
            </div>
               
             }   
    </article>

    </>
  )
}

export default Product