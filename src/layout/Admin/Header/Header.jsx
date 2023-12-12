import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  const [data, setData] = useState([])
  const handleSort = (e) => {
    e.preventDefault()
    let sorted = data.sort((a, b) => a.unitPrice - b.unitPrice)
    setData([...sorted])
  }
  return (
    <nav className='navbarAdmin'>
      <Link to='/' className='homeLink'>Home</Link>
      <button className='btn btn-light sortBtn' onClick={(e)=>{
        handleSort(e)
      }}>Sort by Price</button>
    </nav>
  )
}

export default Header