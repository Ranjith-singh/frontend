import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [people,setpeople]=useState([])

  useEffect(()=>{
    axios.get('/api/people')
    .then((response)=>
    {
      setpeople(response.data)
    })
    .catch((error)=>
    {
      console.error('Error')
    })
  })

  return (
    <>
     <h3>this is using vite framework</h3>
     <h3>people : {people.length}</h3>
     {
     people.map((people,index)=>
     (
      <div key={people.id}>
        <h5>{people.name}</h5>
      </div>
     ))}
    </>
  )
}

export default App
