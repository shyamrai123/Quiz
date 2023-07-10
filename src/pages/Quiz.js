import { useEffect, useState } from "react"
import '../styles/Quiz.css'
import _ from "lodash";
import { useNavigate } from "react-router-dom";


export default function Quiz({name,questions,scoreData }){
    const [currQuestion, setCurrQuestions] = useState(1)
    const [options, setOptions] = useState();
    const [selected, setSelected]  =useState(0);
   const  [error, setError] = useState(false);
   const navigate = useNavigate(); 
     useEffect(()=>{
    console.log(questions)
   },[questions , currQuestion])


const pagechange =()=>{
    setSelected("")
    let ques = questions.results.slice(currQuestion-1,currQuestion)[0]
    if(selected === ques.correct_answer) {
        scoreData.setScore(scoreData.score+1);

    }
    if(currQuestion < questions.results.length-1){

        setCurrQuestions(currQuestion+1)
    
    }

    else {
        navigate("/Result")
    }

    
};


 const handleSelect = (i,correct)=>{
    console.log(selected,i,correct);
     if(selected && selected ===i && selected === correct){
        return "select";
     } else if( selected && i === correct) return "select";
     else if(selected) return "wrong";
 }

 const handlecheck = (i,correct)=>{
  setSelected(i);
//   if(i===correct)  setScore(score+1)
  setError(false);
  
   

  
 }




const handlequit = ()=>{}

 

    return(
        <div className="quizPage">
              <div><h3>score:{scoreData.score}</h3></div>
              <div><h3>name:{name}</h3></div>
             
              
            {
            questions && questions.results.slice(currQuestion-1,currQuestion).map((item,index)=>{
                    const options = [item.correct_answer,...item.incorrect_answers];
                    const sortedOptions = _.shuffle(options);
                        console.log(currQuestion);
                        
                      return(
                             <div>
                                
                                 <div className="question"><h1 key ={index}>{item.question}</h1></div>
                                <div className="btnactions">
                                {sortedOptions.map((e , i)=>{
                                        return (
                                            <div><button
                                            key={i} 
                                            onClick={()=>{handlecheck(e,item.correct_answer)}}
                                            className={`btnwrong ${selected && handleSelect(e,item.correct_answer)} `}
                                            disabled={selected}

                                                
                                            
                                            
                                            
                                            >{e}</button></div> 
                                        )
                                    })}

                                        
                                </div>    
                             </div>
   
                      )
                })
            }

            <div className="actions">
                <div><button className="btnquit" onClick={handlequit}>Quit Quiz</button></div>
                <div><button className="btnnext" onClick={pagechange}>next Page</button></div>

            </div>
        </div>
    )
}