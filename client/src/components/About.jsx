import React from 'react'
import '../App.css'

function About() {
  return (
    <section className="about" id="about">
    
    <div className="about-text">
        <h2>50 Years Of Serving Communities</h2>
        <p>Founded in 1974 as a medical billing company, One-Health has never strayed from its mission: To Maximize the Profit for Physicians and Medical Practices. Our market leadership in medical billing and other supporting services is a result of our fantastic internal culture and focus on customer service.
        The One-Health culture is founded on learning and personal growth. We believe there is no difference between leadership and education. To this end, our staff participate in a minimum of 40 hours of training annually on a variety of subjects, all relating to increasing their engagement and performance.
        To give our clients the best experience possible, we focus on continually improving the efficiency of our operations. Through a bi-annual evaluation, as well as ongoing automation and workflow refinement, we strive to work smarter so we can help you do the same.</p>
    </div>

<div className='container'>
    <div className= 'about-info'>
       <h3>Does One Health Clinic treat my condition?</h3>
       <p>One Health Clinic experts solve the world's toughest medical problems — one patient at a time. No matter what serious, complex or rare health challenge you're facing, you can be confident that One Health Clinic has extensive experience in treating patients with your specific condition.</p>
    </div>
    <div className='expert'>
      <img  src="expert.webp" alt="" width="300"/>
    </div>

    <div className='about-info'>
        <h4>Is One Health Clinic doing research on my condition?</h4>
        <p>Our relentless research yields scientific discoveries and innovations that reach our patients faster and help them heal sooner. Our patients are frequently among the first to benefit from breakthrough therapies, advanced technologies and clinical research trials.</p>
    </div>
    <div className='expert'>
    <img  src="experts.webp" alt="" width="300"/>
    </div>

    <div className='about-info'>
        <h4>What makes care at One Health Clinic different?</h4>
        <p>Effective treatment depends on getting the right diagnosis as soon as possible. Our specialists collaborate across disciplines to listen to your story, evaluate your condition from every angle, and develop a diagnosis and treatment plan that's just for you.</p>
    </div>
    <div className='expert'>
    <img  src="expertss.webp" alt="" width="300"/>
    </div>
    </div>

    

    </section>
  )
}

export default About
