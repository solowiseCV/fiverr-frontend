import React,{useEffect, useState} from "react"
// import styles from "./Login.scss";
 import styles from "./auth.module.scss"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";

const Login = () => {
  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate();
   const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login",{username,password},{withCredentials: true});
       localStorage.setItem("currentUser",JSON.stringify(res.data));
       navigate("/");
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
    
   } 

  return (
    <>
    <section className={`container ${styles.auth}`}>
    <div className={styles.form}>
               <h2>Login</h2> 
        <form onSubmit={handleSubmit}>
               <input
                 type="text"
                 placeholder="JohnDoe..."
                 name="username"
                 required
                 onChange={e => setUsername(e.target.value)}
                
               />
                <input
                 type="password"
                 placeholder="Enter your password ..."
                 name= "password"
                 required
                 onChange={e => setPassword(e.target.value)}
               />
               <button type="submit" className="loginBtn">Login</button>
               {error && error}
               
               </form>

               <span className={styles.register}>
           <p>Dont have an account? </p>
           <Link to="/register" >Register</Link>
          </span>  
          
         </div>
       

      
        
    </section>
    </>
  )
}

export default Login
