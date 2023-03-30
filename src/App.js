import Acordeon from "./Acordeon"
import React from 'react'
import { useState, useEffect } from 'react'
import Button from "./Button"
import Appclass from "./class/Appclass"


function App() {

  const URL = 'https://countriesnow.space/api/v0.1/countries/capital'
  const [data, setData] = useState([])
  const [page,setpage] = useState(1)
  const length = data.length 
  let count = 10 
  const start = (page - 1 ) * count;
  const end = start + count;
  const dataArray = data.slice(start,end)
  
  useEffect(() => {
    fetch(URL) 
    .then(result => result.json())
    .then(data => setData(data.data))
   
  },[])
  console.log(data);

function getPage(page) {
  setpage(page) 
}

  return (
    <>
    <div>
          <h1>React Accordion Demo</h1>
    {
        dataArray?.map((item, index) => {
          return (
            <Acordeon key={index} props={item}/>
          )
        })
      }

      <Button length = {length} getPage = {getPage} count = {count} />
    </div>
    <Appclass /></>
    
  )
}




export default App