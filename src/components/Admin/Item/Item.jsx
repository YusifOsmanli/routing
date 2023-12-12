import React from 'react'
import "./Item.css"
const Item = ({ item, deleteHandler }) => {
  return (
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.unitPrice} AZN</td>
      <td><button className='favorite'>Edit</button></td>
      <td><button className='btnDelete' onClick={()=>{
        deleteHandler(item.id)
      }}>Delete</button></td>
    </tr>
  )
}

export default Item