import React from 'react'

const NavBar = ({showLoginHandler,showRegisterHandler}) => {
  console.log(showLoginHandler)
  return (
    
      <div className="navSection">
        <div className="company">
          VendorDashBoard
        </div>
        <div className="userAuth">
          <span onClick={showLoginHandler}>Login/</span>
          <span onClick={showRegisterHandler}>Register</span>
        </div>
      </div>

  )
}

export default NavBar