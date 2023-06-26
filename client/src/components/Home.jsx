import React from 'react'
import '../App.css';

function Home() {
  return (
    <section class="home" id="home">
    <div class="home-text" id="home-text">
       <h1>Let's Make Your Life Happier </h1>
       <h2>Healthy Living</h2>
        <h3>Don't Hesitate To Consult </h3>
       
    </div>

<section className='welcome'>
    <div className='home-welcome'>
      <h4>Welcome to Your Health Center</h4>
     <p>The million patients we treat each year prepares us to treat the one who matters most — you. 
      Treatment at One Health is a truly human experience. You're cared for as a person first.
      Count on our experts to deliver an accurate diagnosis and the right plan for you the first time.
      </p>
    </div>

    <div className='doctor'>
      <img  src="doctor.png" alt="" width="300"/>
    </div>
    </section>
    <section className='care'>
    <div className='visit'>
      <img  src="appointment.jpeg" width="300" />
    </div>
    <div className='appointments'>
        <h5>Visitor Care</h5>
        <p>Don't delay needed care. Your safety is our top priority. Didn't have  an appointment yet? Check appointment section and Don't hesitate to make one now. </p>  
        
    </div>
    
    </section>
 </section>
  )
}

export default Home
