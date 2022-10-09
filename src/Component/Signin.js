import React,{useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@mui/material/Radio';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [nameErr, setNameErr]=useState("");
  const [numberErr, setNumberErr]=useState("");
  const [genderErr, setGenderErr] = useState("");
  const [dateErr, setDateErr]=useState("");
  const [emailErr, setEmailErr]=useState("");
  const [passwordErr, setPasswordErr]=useState("");
  
   

  const handleSumit=(e)=>{
    var fname = /^[A-Za-z ]+$/;/*regular expration in only character name*/

    var contact = /^[6789]\d{9}$/;/*regular expration in only number  /^[0-9]+$/ */ 
    // indian number start digit /^[6789]\d{9}$/
    
    var mailformat =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /*regular expration in email*/
    
    var pass=/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&^*])/;/*regular expration in only*/
   
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; 

    

    //  name validation 
    if (name=="") {
      setNameErr(<p style={{color:'red'}}>Name field required</p>);
    
      }
      else if(!fname.test(name)) {
        setNameErr(<p style={{color:'red'}}>Only Character</p>);
      }
      else{
        setNameErr(true)
      }

    // number validation
    if (number=="") {
      setNumberErr(<p style={{color:'red'}}>Number field required</p>);
    
      }
      else if(!contact.test(number)) {
        setNumberErr(<p style={{color:'red'}}>Please enter a valid only phone number</p>);
      }
      else{
        setNumberErr(true)
      }

      // gender validation
      if (gender== "") {  
        setGenderErr(<p style={{color:'red'}}>Gender field required</p>); 
                } 
        else{
          setGenderErr(true)
        } 

    // Date validation
    if (date=="") {
      setDateErr(<p style={{color:'red'}}>Date field required</p>);
    
      }
      else if(!dateformat.test(date)) {
        setDateErr(<p style={{color:'red'}}>Invalied date</p>);
      }
      else{
        setDateErr(true)
      }



    // email validation
      if (email=="") {
          setEmailErr(<p style={{color:'red'}}>Email field required</p>);

      }
      else if(!mailformat.test(email)) {
        setEmailErr(<p style={{color:'red'}}>Email invalied</p>);
      }

      else{
        setEmailErr(true)
      }

    // password validation 
      if (password== "") {
        setPasswordErr(<p style={{color:'red'}}>Password field required</p>);
      
        }
        else if(!pass.test(password)) {
          setPasswordErr(<p style={{color:'red'}}>Uppercase later, number and special char only.</p>);
        }
        else{
          setPasswordErr(true)
        }

    }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
         
          </Typography>
           <span className='span-inputfield'>
           {nameErr}
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            id="name"
            label="Name"
            autoComplete="name"
            autoFocus
            onKeyUp={(e)=>setName(e.target.value)}
          />
           
           {numberErr}
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="number"
            id="number"
            label="Number"
            autoComplete="number"
            autoFocus
            onKeyUp={(e)=>setNumber(e.target.value)}
          />

          <br/><br/>
          {genderErr}
           <div style={{marginLeft:'75%'}}>
            <input label="Female" type="radio" name="gender" 
             value="female" onClick={(e)=>setGender(e.target.value)}/>Femal
             <br/><br/>
           <input label="male" type="radio" name="gender"
              value="male" onClick={(e)=>setGender(e.target.value)} />Male
           </div>
        
          <br/><br/>
          {dateErr}
            
            <div style={{marginLeft:'75%'}}>
            <input type="text" name="date" id="date"
             size="25"maxlength="25" placeholder='enter the date'
              onKeyUp={(e)=>setDate(e.target.value)}
           />
            </div>

          <br/>        

           {emailErr}
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            onKeyUp={(e)=>setEmail(e.target.value)}
          />
           
           {passwordErr}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onKeyUp={(e)=>setPassword(e.target.value)}
            /> 
           </span>       
           

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSumit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}