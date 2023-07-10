import { Navigate, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import "../styles/levels.css"

export default function Levels({setUsers,users}) {
    const navigate = useNavigate()
    const next = () => {
        navigate("/Home")
    }

    const [name, setName] = useState("");

    localStorage.setItem("name",users.name)
    const inpRef = useRef();

    return (
        <div ref={inpRef} className="levelsPart">
            <div><h1>choose the Levels</h1></div>
            <div><input type="text" name="seeName" onChange={(e)=>setUsers({...users,name:e.target.value})} placeholder="enter name" /></div>
            <div><select className="select" onChange={(e)=>setUsers({...users,category:e.target.value})}>
                <option>Category</option>
                <option>Maths</option>
                <option>Geography</option>
                <option>General Knowledge</option>
                <option>Politics</option>
                <option>science</option>
            </select>
            </div>
            <div>
                <select className="select" >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>
            <div><button onClick={next}>Start Quiz</button></div>
        </div>
    )

}