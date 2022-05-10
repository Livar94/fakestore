import React, { useEffect, useState } from 'react'
import CategoryButton from '../components/CategoryButton'

export default function Home() {
    const [categories, setCategories] = useState() 
    const getCategories = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products/categories')
            const categoriesdata = await res.json()
            setCategories(categoriesdata)
        } catch (error) {
            // console.log(error)
            alert(error.message)
            
            
        }
    }
    useEffect(() => {
        getCategories()

    }, []) 
  return (
    <div>
        <div>
            <h1>Categories</h1>
        </div>
        <div>
            
            {categories?.map((categoryName) => {
                 return <CategoryButton name={categoryName} />
            })}
            
        </div>
    </div>
  )
}
