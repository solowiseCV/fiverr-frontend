import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

      useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return()=>{
            window.removeEventListener("scroll",isActive)
        }
      })

      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const navigate = useNavigate();
      const handleLogout = async ()=>{
         try {
            await newRequest.post("/auth/logout");
            localStorage.setItem("currentUser",null);
            navigate("/home");
         } catch (error) {
            console.log(error);
         }
      }


  return (
    <div className={active ? "navbar active" : "navbar" }>
        <div className='container'>
            <div className="logo">
                <Link to={"/"} className="link">
                <span className="text">SoloLance</span>
                </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span className="">Fiverr Business</span>
                <span className="">Explore</span>
                <span className="">English</span>
                <Link to={"/login"} className="link">Sign In</Link>
                { !currentUser?.isSeller &&
                <span className="">Become a Seller</span>}
                <Link to={"/register"} className='link'>
                <button className="">Join</button>
                </Link>
               
                 {
                    currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                         <Link to={"/gigs"} className='link'>Gigs</Link>
                                         <Link to={"/add"} className='link'>Add New Gig</Link>

                                        </>
                                    )
                                }
                                <Link to={"/orders"} className='link'>Orders</Link>
                                <Link to={"/messages"} className='link'>Messages</Link>
                                <Link className='link' onClick={handleLogout}>
                                Logout
                                
                                </Link>
                            </div>}
                        </div>
                    )
                 }
            </div>
        </div>
        { active &&
        <>  
        <hr />
        <div className="menu">
            <span>test1</span>
            <span>test2</span>
        </div>
        </>}
    </div>
  )
}

export default Navbar
