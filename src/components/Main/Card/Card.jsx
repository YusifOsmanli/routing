import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
const Card = ({item, addToFavorite}) => {
  return (
    <div className="card mb-2" id='card' style={{ width: "18rem"}}>
    <img className="card-img-top" src="https://adultpaintbynumber.com/wp-content/uploads/2020/07/orange-aesthetic-car-adult-by-numbers.jpg" style={{height:'350px'}} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{item?.name}</h5>
        <p className="card-text">{item?.unitPrice} AZN</p>
        <div className='buttons'>
        <button className='favorite' onClick={(e)=>{
          addToFavorite(item.id)
        }}>AddToFavorite</button>
        <Link className='detail' to={`/${item.id}`}>Detail</Link>
        </div>
    </div>
</div>
  )
}

export default Card