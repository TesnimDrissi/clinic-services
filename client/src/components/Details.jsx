import React from 'react'

function Details(props) {
  return (
   
    
      <div className='wrapper'>
        <h1>Appointment Requests:</h1>
        <table className='wrapper-table'>

        <tr>
    <th>Full Name</th>
    <th>Address</th>
    <th>Number</th>
    <th>General Helath</th>
    <th>Date</th>
    <th>Message</th>
    <th>Picture</th>
    <th>Action</th>
  </tr>

        <tr>
     <td> {props.user.fullname}</td>
    <td>  {props.user.address}</td>
    <td>  {props.user.number}</td>
    <td>{props.user.general_health}</td>
     <td>  {props.user.date}</td>
     <td> {props.user.message}</td>
     <td> <img className='user-img' src={props.user.image}/></td>
     <td><button className='delete' onClick={()=>{props.deleteUser(props.user._id)}}>Delete</button></td>
     </tr>

      </table>
      </div>

    
   
  )
}

export default Details
