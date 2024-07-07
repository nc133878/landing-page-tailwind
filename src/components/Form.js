import React from 'react'
import Footer from './Footer'

function Form() {
  return (
    <div className='flex flex-col items-center border-t-4 w-screen border-slate-900 bg-slate-700 text-white mt-10'>
        <div className='max-w-sm md:max-w-lg w-full text-center'>
            
            <h2 className='text-slate-200 font-bold m-10'>Sign up to download the free PDF</h2>

            <form className='flex flex-col items-center gap-4' >

                <div className='w-full flex flex-col md:flex-row gap-4 '>
                    <input 
                        className='w-full bg-slate-600 placeholder-slate-400 text-slate-300 px-4 py-2 border-2 rounded-lg border-slate-500' 
                        type="text" 
                        id="fname" 
                        name="fname" 
                        placeholder='First name'
                    />
            
                    <input 
                        className='w-full bg-slate-600 placeholder-slate-400 text-slate-300 px-4 py-2 border-2 rounded-lg border-slate-500'
                        type="text" 
                        id="lname" 
                        name="lname" 
                        placeholder='Last name'
                    />
                </div>
                
                <div className='w-full flex flex-col md:flex-row gap-4 '>
                <input 
                    className='w-full bg-slate-600 placeholder-slate-400 text-slate-300 px-4 py-2 border-2 rounded-lg border-slate-500' 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder='john@email.com'
                />

                <input 
                    className='w-full bg-slate-600 placeholder-slate-400 text-slate-500 px-4 py-2 border-2 rounded-lg border-slate-500' 
                    type="text" 
                    id="title" 
                    name="title" 
                    placeholder='Your title'
                    />
                </div>
                <button className='w-full text-white bg-blue-500 rounded-lg border-none p-2 text-sm'>Create account</button>

            </form>
        </div>
        

        <Footer />
    </div>
  )
}

export default Form