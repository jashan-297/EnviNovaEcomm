
import React from 'react';
import home1img from './images/homeimgs/home1img.png'; // Tell webpack this JS file uses this image
import classes from './home1img.module.css';
import { useHistory } from "react-router-dom";

const imgStyle={
    
     height:"176px",
     margin: "100px 19px",
     width:"1321px",

  
  };

const Home1Img=({className}) =>{
  const history = useHistory();
  const handleSignUp=()=>{
    history.push("/signup")
  }
  return (
    <div className={classes.container}>
    <img src={home1img} alt="Home1Img" style={imgStyle} className={classes.image} onClick={handleSignUp}/>
   
    </div>
  )
     
}

export default Home1Img;
