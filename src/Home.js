import AutoGrid from "./components/top/Grid";
import * as React from 'react';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import kitchenProducts from './images/homeimgs/kitchenProducts.jpg';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from '@material-ui/core';
import { CardActionArea } from '@mui/material';
import ShopUnder299 from './images/homeimgs/ShopUnder299.jpg'
import ShopUnder999 from './images/homeimgs/ShopUnder999.jpg'
import cosmetics from './images/homeimgs/cosmetics.jpg';
import cashbackRewards from './images/homeimgs/cashbackRewards.jpg';
import mobilephoto from './images/homeimgs/mobilephoto.jpg';
import gplay from './images/homeimgs/gplay.jpg';
import appstore from './images/homeimgs/appstore.jpg';
import sustainability from './images/homeimgs/sustainability.png';
import novastoreimg from './images/homeimgs/novastoreimg.png';
import FreeShipping from './images/homeimgs/FreeShipping.png';
import CenteredTabs from "./components/centertabs";
import homeending from './images/homeimgs/homeending.jpg';
import Navbar from "./components/top/Navbar";
import CategoryBar from "./components/top/CategoryBar";
import Footer from "./components/footer/Footer";
import Gallery from "./components/carousel";
import HomeCarousel from "./components/HomeCarousel";
import Home1Img from "./home1img";
import classes from './Home.module.css';


const Home=()=>{
  const history = useHistory();
  function handleClick() {
    history.push("/rewards");
  }
  const goToSupport=()=>{
    history.push("/support");
  }
  const handleClick299=()=>{
    history.push("/shopUnder299");
  }
  const handleClick999=()=>{
    history.push("/shopeUnder999");
  }

return (
<React.Fragment>
<Navbar  />
      <CategoryBar />
      
{/* <AutoGrid/> */}
<div style={{marginTop:"100px"}}>
< HomeCarousel />
</div>
<Home1Img />
    <Grid container spacing={2}>
        <Grid item xl={6} xs={6}>
    <Card  style={{height:"272px",width:"650px",marginLeft:"26px"}}>
      <CardActionArea >
        <CardMedia
component="img"
height="272"
onClick={handleClick299}
        src={ShopUnder299}
        
        />
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xl={6} xs={6}>
    <Card  style={{height:"272px",width:"650px"}}>
      <CardActionArea >
        <CardMedia
component="img"
height="272"
onClick={handleClick999}
        src={ShopUnder999}
        
        />
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    <div style={{paddingTop:"95px"}}>
        <h1 style={{fontWeight:"700",fontSize:"64px",color:"#4F4F4F",fontFamily:"Oswald",lineHeight:"92px",marginLeft:"26px"}}>TOP CATEGORIES</h1>
        <Grid container style={{paddingTop:"45px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"691px",width:"1314px",marginLeft:"26px"}}>
            <CardActionArea >
             <CardMedia
               component="img"
                 height="691"
        src={kitchenProducts}
        
        />
      </CardActionArea>
    </Card>
                </Grid>
        </Grid>
    
    </div>
    <div style={{paddingTop:"98px"}}>
        <h1 style={{fontWeight:"700",fontSize:"64px",color:"#4F4F4F",fontFamily:"Oswald",lineHeight:"95px",marginLeft:"26px"}}>TRENDING DAILY</h1>
        <Grid container style={{paddingTop:"45px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"691px",width:"1314px",marginLeft:"26px"}}>
            <CardActionArea >
             <CardMedia
               component="img"
                 height="691"
        src={cosmetics}
        
        />
      </CardActionArea>
    </Card>
                </Grid>
        </Grid>
    
    </div>
    <div style={{marginTop:"152px",marginLeft:"121px",textAlign:"center",width:"1124px",height:"350px"}}>
        <span >
           <h1 style={{fontWeight:"700",fontSize:"64px",color:"#4F4F4F",fontFamily:"Montserrat",lineHeight:"79px"}}>SMALL ON WALLET;</h1>
           <h1 style={{fontWeight:"700",fontSize:"144px",color:"#4F4F4F",fontFamily:"Montserrat",lineHeight:"176px"}}>LARGE ON JOY</h1>
        </span>
    
    <div style={{paddingTop:"10px",marginLeft:"50px",textAlign:"center",width:"1033px",height:"71px"}}>
       
           <h1 style={{fontWeight:"normal",fontSize:"42px",color: "#828282",fontFamily:"Oswald",lineHeight:"72px"}}>Every purchase you make in our store earns you points.</h1>
    </div>
    </div>
    <Grid container style={{paddingTop:"100px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"827px",width:"1358px",marginLeft:"26px"}}>
            <CardActionArea >
             <CardMedia
               component="img"
                 height="827"
                 onClick={handleClick}
        src={cashbackRewards}
        
        />
      </CardActionArea>
    </Card>
                </Grid>
        </Grid>
        <div style={{marginTop:"119px",marginLeft:"173px",textAlign:"center",width:"1020px",height:"234px"}}>
       
           <h1 style={{fontWeight:"700",fontSize:"96px",color:"#4F4F4F",fontFamily:"Montserrat",lineHeight:"118px"}}>EXPERIENCE US ON 
MOBILE APP</h1>
    </div>
    <div style={{marginTop:"120px",marginLeft:"782px",textAlign:"center",width:"340px",height:"71px"}}>
       
           <h1 style={{fontWeight:"500",fontSize:"48px",color:"#828282",fontFamily:"Oswald",lineHeight:"72px",width:"450px"}}>FEATURES OF APP</h1>
           <h1 style={{fontWeight:"400",fontSize:"36px",color:"#000000",fontFamily:"Oswald",lineHeight:"54px",width:"450px"}}>One step closer to green living. </h1>
    </div>
       
           
  
    <Grid container spacing={3} >
            <Grid item xl={6} xs={6}>
            <Card  style={{height:"819px",width:"414px",marginLeft:"90px",borderRadius: "40px 40px 40px 40px"}}>
             <CardMedia
               component="img"
                 height="819"
        src={mobilephoto} 
        />
    </Card>
                </Grid>
                <Grid item xl={6} xs={6}>
                  <Grid container>
                  <Grid item xl={12} xs={12}>
                <div className={classes.text}>
                 
                  <h2 className={classes.h2s} style={{fontSize:"23px"}} >It’s all about you:</h2>
<p className={classes.ps}  style={{fontSize:"23px"}}>Shopping made user friendly & secure</p>
<br />
<h2 className={classes.h2s}  style={{fontSize:"23px"}}>Tap the heart icon</h2>
 <p className={classes.ps}  style={{fontSize:"23px"}}>Save you favourites for easy access later</p>
<br />
<h2 className={classes.h2s}  style={{fontSize:"23px"}}>Adopt an ethical lifestyle</h2>
<p className={classes.ps}  style={{fontSize:"23px"}}>Track & Reduce your carbon footprint.</p>
<br />
<h2 className={classes.h2s}  style={{fontSize:"23px"}}>Shopping the way, you like it</h2>
<p className={classes.ps}  style={{fontSize:"23px"}}>Hassel-free returns, refunds & exchanges.</p>
<br />
<h2 className={classes.h2s}  style={{fontSize:"23px"}}>You're in for a treat </h2>
<p className={classes.ps}  style={{fontSize:"23px"}}>Participate & win exciting rewards exclusively on the app.</p>
               <h1 style={{fontWeight:"700",fontSize:"48px",color:"#9FC8A8",fontFamily:"Montserrat",lineHeight:"59px",width:"377px",marginLeft:"120px",marginTop:"10px"}}>COMING SOON</h1>
                </div>
                </Grid>
                <Grid item xl={6} xs={6} style={{paddingTop:"80px"}}>
                <Card  style={{height:"101px",width:"300px",borderRadius: "20px 20px 20px 20px"}}>
             <CardMedia
               component="img"
                 height="101"
                 src={gplay} />
    </Card>
                    </Grid>
                    <Grid item xl={6} xs={6} style={{paddingTop:"80px"}}>
            <Card  style={{height:"101px",width:"300px",marginRight:"66px",borderRadius: "20px 20px 20px 20px"}}>
             <CardMedia
               component="img"
                 height="101"
                 src={appstore}
                 
        />
    </Card>
                </Grid>


</Grid>
                </Grid>
            
                 </Grid> 
                 <div style={{marginTop:"60px",marginLeft:"261px",textAlign:"center",width:"845px",height:"117px"}}>
       
       <h1 style={{fontWeight:"700",fontSize:"96px",color:"#4F4F4F",fontFamily:"Monserrat",lineHeight:"118px"}}>ONE-STOP SHOP</h1>
</div>
<div style={{marginTop:"80px"}}>
    <img src={sustainability} style={{height:"99px",width:"500px",marginLeft:"433px"}} />
</div>
<Grid container style={{marginTop:"135px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"835px",width:"1202px",marginLeft:"82px"}}>
             <CardMedia
               component="img"
                 height="835"
        src={novastoreimg}
        />
   
    </Card>
                </Grid>
        </Grid> 
        <div style={{marginTop:"100px"}}>
        <h1 style={{fontWeight:"700",fontSize:"36px",color:"#F5A9A9",fontFamily:"Montserrat",lineHeight:"44px",marginLeft:"150px"}}>MY FEED</h1>
            </div> 
        <div style={{paddingTop:"50px",marginRight:"54px",marginLeft:"54px"}}> 
        <Gallery />
        </div>
        <Grid container style={{paddingTop:"155px"}}>
            <Grid item xl={12}>
            <Card  style={{height:"376px",width:"1000px",marginLeft:"130px",borderRadius: "30px 30px 30px 30px"}}>
             <CardMedia
               component="img"
                 height="376"
        src={FreeShipping}
        />
    </Card>
                </Grid>
                </Grid>
<div style={{paddingTop:"200px"}}>
    <CenteredTabs />
</div>
<img src={homeending} style={{height:"263px",width:"1366px",paddingTop:"60px"}} />
<div style={{marginTop:"66px"}}>
      <Footer/>
      </div>
</React.Fragment>
);
}

export default Home;