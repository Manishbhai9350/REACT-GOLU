import React,{useRef} from 'react'
import Card  from './card.jsx'
const App = () => {
    const ref = useRef(null)
    const cards = [
      {
        
        text:'MAKE IT HAPPEN BEFORE 2026',
        mb:{
          text:'2MB',
        },
        bottom:{
          type:true,
          text:'DOWNLOAD',
          color:'bg-red-700'
        },
        
      },
      {
        
        text:'BE A GETLMAN AND NEVER HARM ANYONE',
        mb:{
          text:'60GB',
          icon:true
        },
        bottom:{
          type:true,
          text:'DOWNLOAD',
          color:'bg-blue-700'
        },
        
      },
      {
        
        text:'IF YOU LOVE CODE',
        mb:{
          text:'.6MB'
        },
        bottom:{
          type:true,
          text:'CHECK',
          color:'bg-green-700'
        },
        
      }
      
      ]
    
  return (
      <>
    
    
      <div ref={ref} className='h-[100vh] gap-5 pb-10  relative w-[100vw] bg-zinc-700 overflow-hidden'> 
          <h1 className='text-zinc-500 text-[20vh] absolute rotate-90 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] '> GOLU• </h1>
          <div className='w-full flex justify-center gap-3 px-2 items-center flex-wrap'>
                    {
            cards.map((elm, ind) => <Card reference={ref} data={elm} />)
          }
          </div>
          
      </div>
      
      
      </>
  )
}
export default App