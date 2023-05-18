import React from 'react'
const img = 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'

const Contact = () => {
    function prevent(e){
        e.preventDefault()
    }
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py16'>
        <h2 className='text-center text-gray-700'>Send us a Message</h2>
         <p  className='text-center text-gray-700 py-2'>We're Standing By!</p>
        <div className='grid md:grid-cols-2'>
           <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src={img} alt="" />
           <form onSubmit={prevent}>
             <div className='grid grid-cols-2'>
                <input className='border m-2 p-2' placeholder='first' type="text" />
                <input className='border m-2 p-2' placeholder='last' type="text" />
                <input className='border m-2 p-2' placeholder='email' type="email" />
                <input className='border m-2 p-2' placeholder='phone' type="tel" />
                <input className='border m-2 p-2' placeholder='address' type="text" />
                <textarea className='border col-span-2 m-2 p-2' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='col-span-2 m-2'>Submit</button>
             </div>
           </form>
        </div>
    </div>
  )
}

export default Contact