import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid, TextField} from "@material-ui/core";

import axios from "axios";
import {useState, useEffect} from "react";
import {Link, Redirect} from 'react-router-dom'

const useStyles = makeStyles({
  CardWidth: {
    width: '25em',
    height: '34em'
  }
});

const Register = () => {
  const classes = useStyles();

  const [token, setToken] = useState()
  const [user, setUser] = useState({
    email: '',
    name: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('https://hospital-undefinedzack.herokuapp.com/api/user/register', user)
      .then(res => setToken(res.data))
  }
  return (
    <>
      {token &&
      <>
        {sessionStorage.setItem('jwt', token)}
        <Redirect to={'/'}/>
      </>
      }

      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-8 d-flex flex-column justify-content-center'}>
            <img src={'https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.gif'} width={'800em'}/>
          </div>
          <div className={'col-4'}>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{minHeight: '100vh'}}
              spacing={5}
            >
              <Card className={classes.CardWidth} elevation={10} style={{borderRadius: '15px'}}>
                <CardContent>
                  <Grid item>
                    <Typography gutterBottom variant="h2" align={'center'}>
                      Register
                    </Typography>
                  </Grid>
                  <Grid item>
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <Grid container direction={'column'} alignItems={'center'} justify={'center'}>
                        <TextField className={'mt-4'} fullWidth id={'name'} label={'Name'} variant={'outlined'}
                                   style={{marginBottom: '2em'}} value={user.name}
                                   onChange={(e) => setUser({
                                     ...user,
                                     name: e.target.value
                                   })}
                        />
                        <TextField fullWidth inputMode={"email"} id={'email'} label={'Email'} variant={'outlined'}
                                   style={{marginBottom: '2em'}} value={user.email}
                                   onChange={(e) => setUser({
                                     ...user,
                                     email: e.target.value
                                   })}
                        />

                        <TextField fullWidth id={'password'} label={'Password'} variant={'outlined'} type={'password'}
                                   style={{marginBottom: '1em'}} value={user.password}
                                   onChange={(e) => {
                                     setUser({
                                       ...user,
                                       password: e.target.value
                                     })
                                   }}
                        />
                        <Button className={'mb-5'} variant="contained" style={{color: '#585858', backgroundColor: '#a7ffff'}} type={'submit'}>
                          Sign Up
                        </Button>
                        <Typography gutterBottom align={'center'}>
                          Already have an account?
                        </Typography>
                        <Link to={'/login'}>Sign In</Link>
                      </Grid>
                    </form>

                  </Grid>
                </CardContent>

              </Card>


            </Grid>

          </div>
        </div>
      </div>
    </>
  );
}

export default Register