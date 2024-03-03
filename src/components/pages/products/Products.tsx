import React from 'react'

import { useProductsAndPointsStore } from '../../../store/productsAndPointsStore'
import Filters from './filters/Filters'
import ProductsList from './productsList/ProductsList'






const Products = () => {
  return (
    <div className='container mx-auto pt-16 h-96'>
        <div className='w-11/12 mx-auto px-10'>
            <Filters />
            <ProductsList />
        </div>
        
    </div>
  )
}

export default Products