import React from "react";
import {Grid, Stack, Typography } from "@mui/material";
import Header from "./Header";
import img1 from './Images/mycorrectlogo.png'
import img2 from './Images/Arduino.png'
import img3 from './Images/img3.webp'
import img4 from './Images/img4.jpeg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Footer from './Footer'
import Banner from "./Banner";
const Cards = () => {
  return (
    <>
    

    <Header /> 
    <br/>  <br/>  <br/>  <br/>  <br/>  <br/><br/> 


 
    <container maxWidth="1524">
        <Grid container spacing={2}   justifyContent="center"
     alignItems="center" sx={{margin:1, marginBottom:20}}  >
                     
         
          <br/>
          <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ height:380, widows:{
            xs:100,
            md:200,
            lg:300,
            xl:400
          } 
          }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img2}
        title="Arduino uno"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         C/C++ Programming
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3} >
          <Card sx={{ height:380, widows:{
            xs:100,
            md:200,
            lg:300,
            xl:400
          } }}>
      <CardMedia
        sx={{ height:200}}
        image={img3}
        title="s7 1500 PLC"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          PLC Programming
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ height:380, widows:{
            xs:100,
            md:200,
            lg:300,
            xl:400
          } }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img4}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Online Courses
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
     
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ height:380, widows:{
            xs:100,
            md:200,
            lg:300,
            xl:400
          } }}>
      <CardMedia
        sx={{ height: 200 }}
        image={img1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Industrial Workshop
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Grid>
          
        </Grid>
        </container>
        <Footer/>
  
    </>
  );
};

export default Cards;
