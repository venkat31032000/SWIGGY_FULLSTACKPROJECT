import React from 'react'

const AddFirm = () => {
  return (
          <div className='firmSection'>
                  <form className="tableForm">
                  <label>Firm Name</label>
                  <input type='text'/><br/>
                  <label>Area</label>
                  <input type='text'/><br/>
                  <label>Category</label>
                  <input type='text'/><br/>
                  <div className="checkInp">
                    <label>Category</label>
                    <div className="inputsContainer">
                    <div className="checkBoxContainer">
                      <label>Veg</label>
                      <input type="checkbox" value="Veg"/>
                    </div>
                    <div className="checkBoxContainer">
                      <label>Veg</label>
                      <input type="checkbox" value="Non-Veg"/>
                    </div>
                  </div>
                  </div>
                  <label>Region</label>
                  <input type='text'/><br/>
                  <label>Offer</label>
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

export default AddFirm