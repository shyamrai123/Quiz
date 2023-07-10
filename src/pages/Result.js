import { useEffect } from 'react'
import '../styles/Result.css'
import App from '../App'


export default function Result(props){
          console.log(props)
         const name = localStorage.getItem("name")
    return(
        <div className="result">
            <h1>Name:{name}</h1>
            <h2> Final Score:{props.score}</h2>
        </div>

    )
}