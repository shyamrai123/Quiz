import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Rlogin= ()=>{

const goregister=(e)=>{
    navigate("/")
}

const navigate=useNavigate();
const logform=useRef();
    const [input,setinput]= useState({
        email:"",
        password:"" 
        
    });

    const handlelogin=(e)=>{
      e.preventDefault();
      const baseUrl = "https://students.codex.today/users/login";
      fetch(baseUrl, {
          method : "POST",
          headers: {
              "Content-Type":"application/json"
          },
          body:JSON.stringify(input)
            })
          .then(res => res.json())
          .then(data => {
            if(!data.err){
              localStorage.setItem('token', data.token);
              localStorage.setItem('email', data.email);
              localStorage.setItem("userid",data.userId);
              localStorage.setItem("loggedin",true);
               navigate("/levels");
            }
          else{
            alert("Wrong Email or Password")
          }
          })
          .catch(err => console.log(err))
  };
  
    
    
    return(
        <div className="login-r">
         <div className="linput">
        <div><h1>Quiz</h1></div>
        <div><h1 style={{color:"black"}}>Login</h1></div>

    <form onSubmit={handlelogin}>
        <input style={{width:"20rem", border:"1px solid", padding:"1rem",borderRadius:"10px"}}  type="text" name="email" value={input.email} onChange={(e)=>setinput({...input,email: e.target.value})} placeholder="shyam@Email"/>
        <br></br>
        <br></br>
         <br></br>
        <input style={{width:"20rem", border:"1px solid", padding:"1rem", borderRadius:"10px"}} type="password" name="password" value={input.password} onChange={(e)=>setinput({...input,password: e.target.value})} placeholder="Password"/>

        </form>
<br></br>

        <div style={{display:"flex", gap:"3rem",alignItems:"center"}}>
        <div><p style={{cursor:"pointer"}} type="button" onClick={goregister} > not registered?</p></div>
        </div>

        
        <div style={{display:"flex", gap:"5rem"}}>
          <button  type="submit" onClick={handlelogin} className="lconti">Login</button>
        </div>


       




         </div>

        </div>
    )
}

export default Rlogin;