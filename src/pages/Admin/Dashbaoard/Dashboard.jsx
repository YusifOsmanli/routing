import React from 'react'
import List from '../../../components/Admin/List/List'
import "./Dashboard.css"
import AddProduct from '../AddProduct/AddProduct'
const Home = () => {
  return (
    <div>
      <AddProduct/>
      <List/>
    </div>
  )
}

export default Home