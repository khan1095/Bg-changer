import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className=" w-full h-screen duration-200" style={{backgroundColor:color}}>
        <h1 className='text-center text-5xl text-zinc-50 italic font-serif'>Click on buttons to change the color</h1>
        <div className=" fixed flex flex-wrap px-2  bottom-28 rounded-md inset-x-0 justify-center">
          <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-white rounded-3xl px-3 py-2">
            <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer ' onClick={()=>setColor('blue')} style={{backgroundColor:"blue"}}>blue</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer ' onClick={()=>setColor('green')} style={{backgroundColor:"green"}}>green</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer ' onClick={()=>setColor('yellow')} style={{backgroundColor:"yellow"}}>yellow</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer ' onClick={()=>setColor('orange')} style={{backgroundColor:"orange"}}>orange</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer ' onClick={()=>setColor('black')} style={{backgroundColor:"black"}}>black</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer ' onClick={()=>setColor('red')} style={{backgroundColor:"red"}}>red</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer ' onClick={()=>setColor('cyan')} style={{backgroundColor:"cyan"}}>cyan</button>
            <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg cursor-pointer ' onClick={()=>setColor('purple')} style={{backgroundColor:"purple"}}>purple</button>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
