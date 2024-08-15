import React , {useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login1 from '../components/forms/Login1'
import Register1 from '../components/forms/Register1'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'

const LandingPage = () => {

    const[showLogin, setShowLogin] = useState(false)
    const[showRegister, setShowRegister] = useState(false)
    const[showAddFirm, setShowAddFirm] = useState(false)
    const[showProduct, setShowProduct] = useState(false)

    const showLoginHandler =()=>
    {
      setShowLogin(true)
      setShowRegister(false)
      setShowAddFirm(false)
      setShowProduct(false)
    }

    const showRegisterHandler = () =>
    {
      setShowRegister(true)
      setShowLogin(false)
      setShowAddFirm(false)
      setShowProduct(false)
    }

    const showAddFirmHandler =()=>
    {
      setShowAddFirm(true)
      setShowLogin(false)
      setShowRegister(false)
      setShowProduct(false)
    }

    const showAddProductHandler =()=>
    {
         setShowProduct(true)
         setShowAddFirm(false)
         setShowLogin(false)
         setShowRegister(false)
    }
  return (
    <>
             <section className = 'landingSection'>
                <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler= {showRegisterHandler}/>
                <div className="collectionSection">
                <SideBar showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler}/>
                {showLogin && <Login1/>}
                {showRegister && <Register1/>}
                {showAddFirm && <AddFirm/>}
                {showProduct && <AddProduct/>}
                </div>
             </section>
    </>
  )
}

export default LandingPage