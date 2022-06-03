import logo from './logo.svg';
import './App.css';
import './App.css';
import photo from "./Photo.jpg";
import { useState , useEffect } from 'react';

function App() {
  const state = {
    Person: {
      fullName: "ZAIT Sabrina",
      imgSrc: photo,
      profession: "Student in web developement",
      bio: "happiness can be found even in the darkest of times, if only one remembers to turn on the light."
    },
  
  }
  const [timer, setTimer]= useState(1);
  useEffect(() => {
          setInterval(() => {
               setTimer(timer => timer + 1);
          },1000);  

  }, [])
  // Show or Hide Profile
  const [toggle, setToggle]= useState(true);



    return (
      

        <div className="profile">
          
          
          
          <button onClick={() => setToggle(!toggle)}>show </button>
          
          {toggle &&(
            <div>
              <img src={state.Person.imgSrc}></img>
              
              <h1>{state.Person.fullName}</h1>
              
              <h3>{state.Person.profession}</h3>
              
              <p>{state.Person.bio}</p>
            </div>)
          }
          <h1>chrono : {timer}</h1>
        </div>

      
    )

}

export default App;
