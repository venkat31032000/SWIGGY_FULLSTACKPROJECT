import React from 'react'

const AddProduct = () => {
  return (
    <div className='firmSection'>
                  <form className="tableForm">
                    <h2>Add Product</h2>
                  <label>Product Name</label>
                  <input type='text'/><br/>
                  <label>Price</label>
                  <input type='text'/><br/>
                  <label>Category</label>
                  <input type='text'/><br/>
                  <label>Beseller</label>
                  <input type='text'/><br/>
                  <label>Description</label>
                  <input type='text'/><br/>
                  <label>Firm Image</label>
                  <input type='file'/><br/>
                  <div>
                    <button>Submit</button>
                  </div>
                  </form>
          </div>

  )
}

export default AddProduct