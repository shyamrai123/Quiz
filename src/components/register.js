import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";



const Register=()=>{
       
    const navigate=useNavigate()
    const [input,setinput]= useState({
        email:"",
        password:"",
        country:"",
        phonenumber:""
    });
    const regForm=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const baseUrl = "https://students.codex.today/users/register"
        fetch(baseUrl, {
            method : "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(input)
              })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            
        localStorage.setItem("user",JSON.stringify(input));
        navigate("/login");
    }


        
    return(

        <div className="register-r">

         <div className="sinput">
        
        <div><h1 style={{color:"black"}}>Signup or Register</h1></div>


        <form ref={regForm} onSubmit={handleSubmit}>
        <div><input style={{width:"20rem", border:"1px solid", padding:"1rem",borderRadius:"10px"}}  type="text" name="emailid" value={input.email} onChange={(e)=>setinput({...input,email: e.target.value})} placeholder="Email"/></div>
         <br></br>
        
        <div><input style={{width:"20rem", border:"1px solid", padding:"1rem", borderRadius:"10px"}} type="password" name="password" value={input.password} onChange={(e)=>setinput({...input,password: e.target.value})} placeholder="Password"/></div>
        <br></br>
        <div><input style={{width:"20rem", border:"1px solid", padding:"1rem",borderRadius:"10px"}}  type="text" name="country" value={input.country} onChange={(e)=>setinput({...input,country: e.target.value})} placeholder="Country"/></div>
        <br></br>
        <div><input style={{width:"20rem", border:"1px solid", padding:"1rem", borderRadius:"10px"}} type="text" name="phonenumber" value={input.phonenumber} onChange={(e)=>setinput({...input,phonenumber: e.target.value})} placeholder="PhoneNumber"/></div>
        </form>
        
        
        <div style={{display:"flex", gap:"3rem",alignItems:"center"}}></div>
        <div style={{display:"flex",alignItems:"center",padding:"0.5rem",cursor:"pointer"}}> <input type="checkbox"/>Remember </div>
        <div><p>Forget Password?</p></div>
        
        </div>

        
        <div style={{display:"flex", gap:"5rem"}}>
          <button  className="back">Back</button>
          <button onClick={handleSubmit}  type="submit" className="conti">Login page</button>
        </div>
<br></br>
        <div>Or Continue With: </div>

<br></br>

       




         </div>

        
    )
}

export default Register;