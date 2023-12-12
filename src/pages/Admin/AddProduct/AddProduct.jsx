import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import toast from 'react-hot-toast'
import "./AddProduct.css"
const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      unitPrice: ''
    },
    onSubmit: values => {
      axios.post("https://northwind.vercel.app/api/products", { ...values }).then(res => {
        toast.success("Item elave olundu")
        console.log(res)
      })
    }
  })
  return (
    <div>
      <button type="button" className="btn btn-light addBtn" data-toggle="modal" data-target="#exampleModal">
        Add Product
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className='formInp' onSubmit={formik.handleSubmit}>
                <label htmlFor="name"><b>Name:</b></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />

                <label htmlFor="unitPrice"><b>UnitPrice:</b></label>
                <input
                  id="unitPrice"
                  name="unitPrice"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.unitPrice}
                />

                <button className="submit" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct