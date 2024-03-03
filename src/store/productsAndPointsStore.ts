import { create } from "zustand";

interface UserData {
    name: string;
    points : number
}

interface Product {
   name: string;
   cost: number;
   _id : number
   // Otras propiedades de producto si las hay

}
interface ProductsAndPointsState {
          userData : UserData
          getUserData : () => Promise<void>
          loading : Boolean
          products : []
          originalProducts : []
          getProducts : () => Promise<void>
          reedem : (product : Product) => void
          setLoadingProduct : (value : Boolean) => void
          loadingProduct : Boolean
          lowestPrice : () => void
          highestPrice : () => void
          mostRecent : () => void
          history : []
          getHistory : () => Promise<void>
          addPoints : (number : number) => Promise<void>
          points : number
}

export const useProductsAndPointsStore = create<ProductsAndPointsState> ()((set,get) => ({
         userData : {name : "", points : 0},
         loading: true,
          getUserData : async () => {
             const res = await fetch(`https://coding-challenge-api.aerolab.co/user/me`,{
                headers: {
                  'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
                })
             const data = await res.json()
             set(state => ({
                ...state,
                userData : data,
                loading: false 
             }))
          },
          products : [],
          originalProducts: [],
          getProducts : async () => {
            const res = await fetch(`https://coding-challenge-api.aerolab.co/products`,{
               headers: {
                 'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
               }
               })
            const data = await res.json()
            
            set(state => ({
               ...state,
               products : data,
               originalProducts : data
            }))
          },
          reedem : async ( product ) => {
            console.log(product._id)
            const res = await fetch(`https://coding-challenge-api.aerolab.co/redeem`,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
              },
              body: JSON.stringify({ 
                productId: product._id 
              })
              })

              const data = await res.json()

              console.log(data)
            const newPrice = get().userData.points - product.cost  

            set(state => ({
               userData: { ...state.userData, points: newPrice},
               isBuying: true,
               loading: false,
            }))

          },
          loadingProduct: false,
          setLoadingProduct: (value) => set({ loadingProduct: value }),
          mostRecent : () => {
            set({ products: get().originalProducts })
           
          },
          lowestPrice : () => {
            const newProducts = [...get().products]; // Hacer una copia del arreglo de productos
            const lowestPrices = newProducts.sort((a, b) => a.cost - b.cost); // Ordenar la copia
            console.log(get().products, lowestPrices)
            set({ products: lowestPrices }); //
          },

          highestPrice : () => {
            
            const newProducts = [...get().products]
            console.log(newProducts)
            const highestPrices = newProducts.sort((a,b) => b.cost - a.cost)

            set(state => ({
                 products : highestPrices
            }))
          },
          history : [],
          getHistory : async () => {
            const res = await fetch("https://coding-challenge-api.aerolab.co/user/history",{
              headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
              }
              })
            const data = await res.json()

            set(state => ({
              ...state,
              history : data
           }))
          },
          points : 0,
          addPoints : async ( number ) => {
             const res = await fetch("https://coding-challenge-api.aerolab.co/user/points", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
              },
              body: JSON.stringify({ 
                amount : number
              })
             })

            
             const data = await res.json()

             console.log(data)

              set(state => ({
              
               userData : {...state.userData, points : data["New Points"]}
              }))
          },
         
}))















