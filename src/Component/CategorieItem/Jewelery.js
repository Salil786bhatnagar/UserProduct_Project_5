import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { InsertEmoticonRounded } from '@material-ui/icons';
import Currentpage from './Currentpage';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function Jewelery() {
    const classes = useStyles();
    const [getCategoriId, setCategoriId] = useState([]);
    
    const categoriHandleId= async()=>{
        const dataId = await fetch("https://fakestoreapi.com/products/category/jewelery");
        console.log("catId",dataId); 
        const showDataId = await dataId.json();
        setCategoriId(showDataId)
     }

     useEffect(()=>{
        categoriHandleId()
     })

  return (
    <div>
    
     <Navbar/>

              {
               getCategoriId.map((itemId,i)=>{
                return(
                  <div className={classes.root}>
                  <Grid container spacing={3}>
                  <Grid item xs={4}>
                  <Paper className={classes.paper}>
                     
                       <span><h5><b><u>category:</u></b>&nbsp;{itemId.category}</h5></span><br/>
                       <span>
                       <h5><Link to={`/Currentpage/`+itemId.id+"/"+itemId.category+"/"+itemId.price+"/"+itemId.rating.rate+"/"+itemId.rating.count+"/"+itemId.title+"/"+itemId.description}>
                       <img src={itemId.image} width='80px' height='80'/></Link></h5></span><br/>
                       {/* <span><b><b><u>price:</u></b>&nbsp;{itemId.price}</b></span><br/><br/>
                       <span><h6><b><u>Rate:</u></b>&nbsp;{itemId.rating.rate}</h6></span><br/>
                       <span><h6><b><u>Count:</u></b>&nbsp;{itemId.rating.count}</h6></span><br/>
                       <span><h6><b><u>title:</u></b>&nbsp;{itemId.title}</h6></span><br/>
                       <span><h6><b><u>description:</u></b>&nbsp;{itemId.description}</h6></span><br/> */}
          </Paper>
        </Grid>
        </Grid>
   

                    </div>
                )
            })
         }
      
      </div>
  )
}
