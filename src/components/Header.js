import React,{useState} from 'react'

// const Header = ({cntryName}) => {
    const Header = ({cntryName}) => {


    // const array = useState("tonny kakkar")
    // const arr1 = array[0];
    // const setArr1 = array[1]

     const [name,setName] = useState("Santeshware");
     let [count,setCount] = useState(0)
    // let name1 = "Maharaja"

    return (<>
      <div className='flex justify-center '><h1 className='font-extrabold' >Hello : {name} from {cntryName}</h1> </div>
      <div className='flex justify-center '>
    <button type='button' className='p-2 m-2 bg-slate-500' onClick={()=>{setName("Devang kartik")}} > click me </button> 
    <button type="button" className='p-2 m-2 bg-slate-500' value={count} onClick={()=>{setCount(++count)}} >increment</button>
    <h1 className='p-2 m-2'>{count}</h1>
    <button type="button" className='p-2 m-2 bg-slate-500' value={count} onClick={()=>{setCount(--count)}} >decrement</button>
    <button type="button" className='p-2 m-2 bg-slate-500' value={count} onClick={()=>{setCount(0)}} >Reset</button>
 </div>
 </>
  )
}

export default Header;