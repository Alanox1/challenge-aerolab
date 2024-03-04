import React, { useState } from 'react'
import { useProductsAndPointsStore } from '../../../../store/productsAndPointsStore'
import Product from '../product/Product'


const ProductsList = () => {

  const products = useProductsAndPointsStore(state => state.products)
  
  return (
    <div className='grid grid-cols-auto-fit-minmax  gap-6 mt-12'>
        {products.map((product)=> (
            <Product key={product._id} product={product} />
        ))}
    </div>
  )
}

export default ProductsList








{/* <article key={product._id} className='bg-white p-6 shadow-3xl'
onMouseEnter={() => setMostrarPrecio(true)}
onMouseLeave={() => setMostrarPrecio(false)}
>
   <figure className='border-b border-yellow-600 '>
       <img src={product.img.url} className='w-full h-auto'/>
   </figure>
   {mostrarPrecio && <p>Precio: gergeregerergergerg</p>}
   <div className='mt-4'>
       <h3 className='text-sm text-gray-400'>{product.category}</h3>
       <p className='text-gray-500 font-semibold'>{product.name}</p>
   </div>
</article> */}