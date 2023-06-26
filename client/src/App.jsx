import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Appointment from './components/Appointment.jsx'

function App() {
  const [view, setView] = useState('Home')
  const [users,setUsers]= useState([])
  const [refresh,setRefresh]= useState(false)

  useEffect(() => {
    axios
    .get("http://localhost:3000/appoinments/")
    .then((response)=>{
      setUsers(response.data)
    })
    .catch((error)=>{
      console.error(error);
    })
  }, [refresh])

  const insertUser = function(fullname,address,number,general_health,date,message,image){
    axios
    .post("http://localhost:3000/appoinments/insert",{
      fullname:fullname,
      address:address,
      number:number,
      general_health:general_health,
      date:date,
      message:message,
      image:image
    })
    .then((response)=>{
      console.log(response.data)
      setRefresh(!refresh)
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  const deleteUser = function(id){
    axios
    .delete(`http://localhost:3000/appoinments/${id}`)
    .then((response)=>{
      console.log(response.data)
      setRefresh(!refresh)
    })
    .catch((error)=>{
      console.error(error);
    })
  }
  
  return (
    <div >
    <div className="list" id="list">


<nav className='navbar'>

    <div className='logo' >

      <img src="logo.png" style={{maxHeight:'70px'}}  alt="" />

    </div>


  <div className='navbar-item' onClick={() => setView('Home')}>
    Home
  </div>

  <div className='navbar-item' onClick={() => setView("About")}>
    About
  </div>
  <div className='navbar-item' onClick={() => setView("Appointment")}>
  Appointments
  </div>
  

</nav>
{view === 'Home' && <Home />}
{view === 'About' && <About />}
{view === 'Appointment' && <Appointment users={users} insertUser={insertUser} deleteUser={deleteUser}/>}



</div>
    </div>
  );
}

export default App;
