import React from 'react'

const SideBar = ({showAddFirmHandler, showAddProductHandler}) => {
  return (
    <div>
       <div className="sidebarSection">
         <ul>
            <li onClick ={showAddFirmHandler}>Add Firm</li>
            <li onClick={showAddProductHandler}>Add Product</li>
            <li>All Products</li>
            <li>User Details</li>
         </ul>
       </div>
    </div>
  )
}

export default SideBar