import React from 'react'
import '../styles/categoryButton.css'
import { Link } from 'react-router-dom'

export default function CategoryButton(props) {
  return (
    <Link to={`/category/${props.name}`}>
      <div className='category-btn'>
          {/* <h1>CategoryButton</h1> */}
          <p>{props.name}</p>

      </div>
    </Link>

    
  )
}
