import { useState } from 'react'
import './App.css'
import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Game from './Victory/Quations.jsx'
import Result from './Victory/Result.jsx'
import {Questions} from './Victory/quations.js'
function App() {
  const [step, setStep] = useState(0)
 const [questions, setQuestions] = useState(Questions[step])
const [result, setResult] = useState(0)
 console.log(step)

  return (
    <>  
   {step === Questions.length ? <Result result={result} value={'Congratulations'} /> :<><div className='main'>
    <h1 className='h1'>{questions.title}</h1>
      <Game result={result} setResult={setResult} Questions={Questions}   step={step} setStep={setStep} questions={questions} setQuestions={setQuestions}  />
   </div> </> }
    </>
  )
}

export default App
