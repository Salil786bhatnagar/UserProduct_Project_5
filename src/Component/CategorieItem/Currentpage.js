import React,{useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
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
 function Currentpage(props) {
     console.warn("show",props)

    const classes = useStyles();
    const [getCurrentdata, setCurrentdata] = useState([]);

    const currentData= async()=>{
        const dataId = await fetch("https://fakestoreapi.com/products/category/jewelery");
        console.log("catId",dataId);
        const showDataId = await dataId.json();
        setCurrentdata(showDataId)
     }



    //  const getStaticProps=async(context)=>{
    //     const id = context.params.curentPage;
    //     const res = await fetch(`https://fakestoreapi.com/products/category/jewelery${id}`);
    //     const data = await res.json();
    //     setCurrentdata(data);
    //   };


     useEffect(()=>{
        currentData()
     })

  return (
    <div>
    
     <Navbar/>
     <h1>current page </h1>
     <span><h5>Id:</h5></span><span className='clasId'>{props.match.params.id}</span>
     <span><h5>Category:</h5></span><span className='category1'>{props.match.params.category}</span>
    <span> <h5>Price:</h5></span><span className='price2'>{props.match.params.price}</span>
    <span> <h5>Rate:</h5></span><span className='rate3'>{props.match.params.rate}</span>
    <span> <h5>Count:</h5></span><span className='count4'>{props.match.params.count}</span>
    <span> <h5>Title:</h5></span><span className='title5'>{props.match.params.title}</span>
    <span> <h5>Description:</h5></span><span className='description5'>{props.match.params.description}</span>
    {/* <img src={`/${props.match.params.image}`} alt="jewelery Image"></img> */}
     {/* <img src={require('/img/'+props.match.params.image)}></img> */}
      {/* <img src={props.match.params.image}/> */}
      {/* <img src={props.match.params.image} alt="image"/> */}
     {/* <img src={props.match.params.image} alt="jeweleryPic"/> */}
     {/* {props.params.image} */}
     {/* {props.match.params.image} */}
     
             {/* {
                getCurrentdata.map((val)=>{
                    return(
                        <div>
                            {val.title}
                        </div>
                    )
                })
             } */}

              {/* {
               getCategoriId.map((itemId,i)=>{
                return(
                  <div className={classes.root}>
                  <Grid container spacing={3}>
                  <Grid item xs={4}>
                  <Paper className={classes.paper}>
                     
                       <span><h5><b><u>category:</u></b>&nbsp;{itemId.category}</h5></span><br/>
                       <span><h5><a><img src={itemId.image} width='80px' height='80'/></a></h5></span><br/>
                       <span><b><b><u>price:</u></b>&nbsp;{itemId.price}</b></span><br/><br/>
                       <span><h6><b><u>Rate:</u></b>&nbsp;{itemId.rating.rate}</h6></span><br/>
                       <span><h6><b><u>Count:</u></b>&nbsp;{itemId.rating.count}</h6></span><br/>
                       <span><h6><b><u>title:</u></b>&nbsp;{itemId.title}</h6></span><br/>
                       <span><h6><b><u>description:</u></b>&nbsp;{itemId.description}</h6></span><br/>
          </Paper>
        </Grid>
        </Grid>
   

                    </div>
                )
            })
         }
       */}
      </div>
  )
}
export default withRouter(Currentpage)