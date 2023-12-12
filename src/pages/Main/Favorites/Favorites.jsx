import React, { useState } from 'react'
import "./Favorites.css"
import { Toaster, toast } from 'react-hot-toast'
const Favorites = () => {
  const [favoriteItems, setFavoritesItems] = useState(localStorage.getItem("favoriteItems") ? JSON.parse(localStorage.getItem("favoriteItems")) : [])

  const deleteFavoriteItems = (id) => {
    let item = favoriteItems.find(item => item.id == id)
    favoriteItems.splice(favoriteItems.indexOf(item), 1)
    setFavoritesItems([...favoriteItems])
    localStorage.setItem("favoriteItems", JSON.stringify([...favoriteItems]))
    toast.success("Item favorites'den silindi")
  }

  return (
    <div className='tablecontainer'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">UnitPrice</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

          {
            favoriteItems.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.unitPrice}</td>
                  <td><button className='deleteBtn' onClick={()=>{
                    deleteFavoriteItems(item.id)
                  }}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
        <Toaster/>
      </table>
    </div>
  )
}

export default Favorites