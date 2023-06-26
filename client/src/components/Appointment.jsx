import React, { useState } from 'react'
import Details from './Details.jsx'

function Appointment(props) {
   var [fullname,setFullname]=useState('')
   var [address,setAddress]=useState('')
   var [number,setNumber]=useState('')
   var [general_health,setGeneral_health]=useState('')
   var [date,setDate]=useState('')
   var [message,setMessage]=useState('')
   var [image,setImage]= useState('')


  return (
    <section>

      <div className='container'>

      <div className='text'>
      <h1>Start your appointment request here.</h1>
      <h2>This is the easiest way to reach us.</h2>
      </div>
      
      <div className='image'>
        <img src="image.webp" width="500" alt=''/>
      </div>
      </div>
     
    <div className='request'>
      <h1>Make an Appointment</h1>
      <form>
      <input
          className='fullname'
          type="text"
          name="fullname"
          placeholder= "Fullname"
         onChange={(e)=>{setFullname(e.target.value)}}
        />
      <input
         className='address'
          type="text"
          name="address"
          placeholder= "Address"
          onChange={(e)=>{setAddress(e.target.value)}}
        />
      <input
      className='number'
          type="text"
          name="number"
          placeholder= "Number"
          onChange={(e)=>{setNumber(e.target.value)}}
        />  
      <input
      className='general_health'
          type="text"
          name="general_health"
          placeholder= "General Health"
          onChange={(e)=>{setGeneral_health(e.target.value)}}
        />
      <input
        className='date'
          type="text"
          name="date"
          placeholder= "Date"
          onChange={(e)=>{setDate(e.target.value)}}
        />
        <input
      className='message'
          type="text"
          name="message"
          placeholder= "Message"
          onChange={(e)=>{setMessage(e.target.value)}}
        /> 
        <input
        className='imageInput'
        type="file"
          name="image"
          placeholder= "Image"
          onChange={(e)=>{setImage(e.target.value)}}
        />
      
        <button  className='submit' onClick={()=>{props.insertUser(fullname,address,number,general_health,date,message,image)}}>Submit Request</button>
      </form>
      </div>

      <div className='list' id='list'>
     {
      props.users.map((user,index)=>(
        <div key={index}>
          <Details user={user} deleteUser={props.deleteUser}/>
          </div>
      ))
     }
     </div>

    </section>
  )
}

export default Appointment
