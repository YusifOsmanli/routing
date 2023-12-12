import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import "./List.css"
const List = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const deleteHandler = (id) => {
        axios.delete(`https://northwind.vercel.app/api/products/${id}`).then(res => {
            toast.success("item deleted")
        })
    }
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            setError(err)
        })
    }, [data])

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">UnitPrice</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        loading ? <div className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                        </div>
                            :
                            data.map((item, index) => {
                                return (<Item deleteHandler={deleteHandler} item={item} key={index} />)
                            })
                    }
                </tbody>
                <Toaster />
            </table>
        </div>
    )
}

export default List