import React from 'react'

function Card(props) {
  return(
    <div className='w-full bg-white mt-4 rounded-lg flex flex-col items-center text-center border-b-4 border-pink-500 sm:w-1/3 '>
        <div className='text-indigo-600 bg-indigo-50 flex justify-center items-center w-16 rounded-full p-2 mt-6 '>
            {props.svg}
        </div>

        <h2 className='text-black  font-bold  mt-4'>{props.title}</h2>
         
        <p className='text-sm max-w-80 mt-4 mb-9 sm:p-3'>{props.desc}</p>

    </div>
  )
}

export default Card