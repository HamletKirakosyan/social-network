import React from 'react'; 


export default function Message() {
  return (
     <form action="" className='message_form'>
         <input type="text" />
         <div>
             <input type="text" placeholder='Enter message'/>

         </div>
         <div>
             <button className='btn'>Send</button>
         </div>
     </form>
  )
}
