import React from 'react'
import Filters from './filters/Filters'
import ProductsList from './productsList/ProductsList'

const Products = () => {
  return (
    <div className='container mx-auto pt-16 pb-16'>
        <div className='w-11/12 mx-auto px-10'>
            <Filters />
            <ProductsList />
        </div>
        
    </div>
  )
}

export default Products