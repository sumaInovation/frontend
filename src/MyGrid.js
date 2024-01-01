
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {Typography} from "@mui/material";
import Header from "./Header";
import img1 from "./Images/mycorrectlogo.png";
import img2 from "./Images/Arduino.png";
import img3 from "./Images/img3.webp";
import img4 from "./Images/img4.jpeg";
import cover1 from "./Images/cover1.jpg"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Grid1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <Card
              sx={{
                height: 380,
                widows: {
                  xs: 100,
                  md: 200,
                  lg: 300,
                  xl: 400,
                },
              }}
            >
              <CardMedia
                sx={{ height: 300 }}
                image={cover1}
                title="Arduino uno"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{backgroundColor:'green', textAlign:'center'}}>
                  PCL & Microcontroller Programming
                </Typography>
                
              </CardContent>
             
            </Card>
        </Grid>


        <Grid item xs={12} md={3}>
        <Card
              sx={{
                height: 380,
                widows: {
                  xs: 100,
                  md: 200,
                  lg: 300,
                  xl: 400,
                },
                
              } }
            >
              <CardMedia
                sx={{ height: 200 }}
                image={img2}
                title="Arduino uno"
              />
              <CardContent sx={{backgroundColor:'#33DDFF'}} >
                <Typography gutterBottom variant="h5" component="div" >
                  C/C++ Programming
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} md={3}>
        <Card
              sx={{
                height: 380,
                widows: {
                  xs: 100,
                  md: 200,
                  lg: 300,
                  xl: 400,
                },
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image={img3}
                title="Arduino uno"
              />
              <CardContent sx={{backgroundColor:'#33FF93'}}>
                <Typography gutterBottom variant="h5" component="div">
                  PLC Programming
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} md={3}>
        <Card
              sx={{
                height: 380,
                widows: {
                  xs: 100,
                  md: 200,
                  lg: 300,
                  xl: 400,
                },
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image={img4}
                title="Arduino uno"
              />
              <CardContent sx={{backgroundColor:'#33ACFF'}}>
                <Typography gutterBottom variant="h5" component="div">
                  Online Course
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} md={3}>
        <Card
              sx={{
                height: 380,
                widows: {
                  xs: 100,
                  md: 200,
                  lg: 300,
                  xl: 400,
                },
              }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image={img1}
                title="Arduino uno"
              />
              <CardContent sx={{backgroundColor:'#FFAF33'}}>
                <Typography gutterBottom variant="h5" component="div">
                  Industrial Workshop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        </Grid>
      </Grid>
    </Box>
  );
}