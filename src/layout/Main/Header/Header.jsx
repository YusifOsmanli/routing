import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  const [favoriteItems, setFavoriteItems] = useState(localStorage.getItem("favoriteItems") ? JSON.parse(localStorage.getItem("favoriteItems")) : [])

  useEffect(() => {
    setFavoriteItems(JSON.parse(localStorage.getItem("favoriteItems")))
  }, [])

  return (
    <div className='header'>
      <div>
        <ul className='list'>
          <li>
            <Link className='link' to=''>Home</Link>
          </li>
          <li >
            <Link className='link' to='/product'>Product</Link>
          </li>
          <li>
            <Link className='link' to='/favorites'>Favorites: </Link>
          </li>
          <li>
            <Link className='link' to='/admin'>Admin</Link>
          </li>
        </ul>
      </div>

    </div>

  )
}

export default Header