import React from 'react'
import image from "../../../assets/header.png"
const Image = () => {
  return (
    <main className='relative h-auto'>
        <h1 className= 'absolute z-50 px-32 pb-14 text-white text-6xl font-bold bottom-0'
        
        >
            Electronics
        </h1>
        <img src={image} 
             alt='Imagen de auriculares para el background' 
             className='h-96 w-full object-cover object-top'
             />  
    </main>
  )
}

export default Image