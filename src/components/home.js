import axios from "axios";
import { useEffect, useState } from "react"
import Quiz from "../pages/Quiz";




export default function Home({user,scoreData}){

    const [questions, setQuestions] = useState({results:[]});
    const [name, setName]            = useState("");
    const [score , setScore]         = useState(0);
    
    useEffect(()=>{
        fetchquestions();
    },[])

 
 const url = "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple"
    const fetchquestions = async()=>{
        const {data} = await axios.get(url);
        // console.log(data.results);
        setQuestions(data);
        
    }
        // console.log(questions);

    return (
        
           <div>
            <Quiz
               name={user.name}
               questions={questions}
               setQuestions={setQuestions}
               scoreData={scoreData}
               category = {user.category}


            />
           </div>
    )
}