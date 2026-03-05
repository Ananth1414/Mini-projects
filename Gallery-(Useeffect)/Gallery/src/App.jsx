import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "./components/Card";
import Lenis from 'lenis'

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    setUserData(response.data);
  };

  fetchData();
}, [index]);

  let printUserData = <h3 className='text-gray-400 top-1/2 left-1/2 font-semibold absolute text-xs -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div className='' key={idx}>
        <Card elem={elem}/>
      </div>
    
      
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex flex-wrap grow gap-10 p-2'>
        {printUserData}
      </div>
      <div className='flex justify-center m-8 gap-15 items-center'>
        
        <button 
        style={{opacity: index==1 ?0.6:1}}
        onClick={()=>{
          if(index > 1){
          setIndex(index-1);
        
          }
        }}
        className='bg-gray-400 text-black rounded px-6 py-2 font-semibold  active:scale-95 duration-200 cursor-pointer '>{'<'} Prev</button>
        <h4>
          Page{index}
        </h4>
        <button 
        onClick={()=>{
          setIndex(index+1)
          
        }}
        className='bg-gray-400 text-black rounded px-6 py-2 font-semibold  active:scale-95 duration-150 cursor-pointer '>Next {'>'}</button>
      </div>
    </div>
    
  )
}

export default App

