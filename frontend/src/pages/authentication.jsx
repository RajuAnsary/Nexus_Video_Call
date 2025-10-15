import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import Snackbar from '@mui/material/Snackbar';



const defaultTheme = createTheme();

export default function Authentication() {
    
const [username, setUsername] = React.useState();
const [password, setPassword] = React.useState();
const [name, setName] = React.useState();
const [error, setError] = React.useState();
const [message, setMessage] = React.useState();

const [formState, setFormState] = React.useState(0);
const [open, setOpen] = React.useState(false);

const {handleRegister, handleLogin}= React.useContext(AuthContext);

let handleAuth= async()=>{
  try{
    if(formState === 0){
      let result =await handleLogin(username,password)
    }
    if(formState === 1){
      let result = await handleRegister(name, username, password);
            console.log(result);
            setMessage(result);
            setUsername("");
            setOpen(true);
            setError("");
            setFormState(0);
            setPassword("")
    }
  }catch(err){
     let message = (err.response.data.message);
      setError(message);
  }
}
 

return (
  <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />

      {/*  Left side with background image */}
      <Grid
        item
        xs={false}
       
         sm={6}
        
         md={7}
        

        sx={{
         backgroundImage: `url("https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600")`, 
      

       
        backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: { xs: 'none', sm: 'block' }, 
           height: '100vh',
        }}
      />

      {/* 🧩 Right side: login/signup form */}
       
       <Grid
        item
        xs={12}
        sm={6}
        md={5}

      
        component={Paper}
        elevation={6}
        square
        sx={{

      
        backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', 
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            width: '100%',
            
            transition: 'all 0.3s ease-in-out', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <div>
            <button
              style={{
                backgroundColor: formState === 0 ? '#2196f3' : '#e3f2fd',
                color: formState === 0 ? 'white' : '#2196f3',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                marginRight: '10px',
                transition: '0.3s',
              }}
              onClick={() => setFormState(0)}
            >
              Sign In
            </button>

            <button
              style={{
                backgroundColor: formState === 1 ? '#2196f3' : '#e3f2fd',
                color: formState === 1 ? 'white' : '#2196f3',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: '0.3s',
              }}
              onClick={() => setFormState(1)}
            >
              Sign Up
            </button>
          </div>

          
          <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
           
            <TextField
              margin="normal"
              fullWidth
              id="fullname"
              label="Full Name"
              name="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                visibility: formState === 1 ? 'visible' : 'hidden',
                height: formState === 1 ? 'auto' : 0,
                mb: formState === 1 ? 2 : 0,
                transition: 'all 0.3s ease-in-out',
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p style={{ color: 'red' }}>{error}</p>

            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleAuth}
            >
              {formState === 0 ? 'Log In' : 'Register'}
            </Button>
          </Box>
        </Box>
      </Grid>
     

    </Grid>

    <Snackbar open={open} autoHideDuration={4000} message={message} />
  </ThemeProvider>
);








}

