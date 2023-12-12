import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import "./Cards.css"
import { Toaster, toast } from 'react-hot-toast'

const Cards = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [filterData, setFilterData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [favoriteItems, setFavoriteItems] = useState(localStorage.getItem("favoriteItems") ? JSON.parse(localStorage.getItem("favoriteItems")) : [])

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => {
        console.log(res.data);
        setData(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
      })
  }, [])

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase().trim())
    );
    setFilterData(filteredData);
  }

  const handleSort = (e) => {
    e.preventDefault()
    let sorted = [...data].sort((a, b) => a.unitPrice - b.unitPrice)
    setData(sorted)
  }

  useEffect(() => {
    handleSearch();
  }, [search]);


  const addToFavorite = (id) => {
    let item = data.find(item => item.id == id)
    setFavoriteItems([...favoriteItems, item])
    localStorage.setItem("favoriteItems", JSON.stringify([...favoriteItems, item]))
    toast.success("Item favorite'e elave olundu")
  }

  return (
    <div>
      <form action="" className='form'>
        <label htmlFor=""></label>
        <input
          className='inp'
          type="text"
          placeholder='Search Product'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setSearch(e.target.value);
          }}
        />
        <button className='btn btn-light' onClick={(e) => {
          handleSort(e)
        }}>Sort by Price</button>
      </form>
      
      <div className="cards">
        {
          loading ? <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
            :
            (filterData.length > 0 ? filterData : data).map((item, index) => (
              <Card addToFavorite={addToFavorite} item={item} key={index} />
            ))
        }
        <Toaster />
      </div>

    </div>
  )
}

export default Cards