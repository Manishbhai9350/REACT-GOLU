import React,{useState} from 'react'
import { RiBookFill } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion  } from 'framer-motion'

const card = ({data,reference}) => {
  
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1,}} className='relative  overflow-hidden  rounded-3xl z-50 w-[85vw] flex-wrap md:w-[30vw] md:h-[10vh]  bg-zinc-900 mt-5 ' > 
        <div className='w-full h-full flex flex-col justify-start items-start   pt-5 h-8 ' > 
          <div className=' flex items-center  justify-start px-4 h-8 w-full'>
              <RiBookFill color='white' scale='1.2' />
          </div>
          <div className='text w-full mt-4 h-[50%] px-4'>
          <p className='w-full h-full text-s text-zinc-600   text-white'>
          {data.text}
          </p>
          </div>
          <div className='w-full flex items-center min-h-8  mb-1'>
                    <div className='w-[20%]  flex justify-start  px-5 items-center h-full  '>
          <IoMdCloseCircleOutline color='grey' /> 
              </div>
              <div className='w-[80%] flex justify-evenly px-3  items-center h-full '>
              <p className='text-zinc-500'>{data.mb.text}</p>   <div className='w-20 rounded-3xl h-1 bg-zinc-500'> 
              </div>
               
            </div>
          </div>
          
          {/* BOTTOM PART */}
             {
               data ? (
                 <>
                 <div className={`flex justify-center items-center w-full h-12 ${data.bottom.color}`}>
                <h3 className='text-white'>{data.bottom.text} </h3>
                      </div>
                      </>
                 ) : null 
             }
                
          
        </div > 
    </motion.div >
    
    </>
  )
}


export default card