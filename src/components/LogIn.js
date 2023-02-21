import React, { useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Button } from 'reactstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UserAuth } from '../context/AuthContext';


export default function LogIn() {


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const {signIn} = UserAuth();

   useEffect(() => {

   })
  const navigate = useNavigate();

  const login = async () => {
    try {
    const user = await signIn(loginEmail, loginPassword);
    navigate('/')
    }
    catch (error)
    {
      console.log(error.message);
    }
  };


  return (
    


    <Card className='mt-5 py-3 w-25 mx-auto'>
      <img src="assets/images/logo1.png" height="125" width="125" className='mx-auto mb-2'></img>
      <CardTitle> 
      <h1>Login</h1> 
      </CardTitle>
      <CardBody className>
        <Form>
        <div className='w-75 mx-auto'>
        <FormGroup className='pb-2'>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(event) => {setLoginEmail
          (event.target.value);}}/>
        </FormGroup>
        <FormGroup className='pb-2'>
          <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Password" onChange={(event) => {setLoginPassword
          (event.target.value);}}/>
        </FormGroup>
        </div>
        </Form>
        <Button className='w-25 py-2' onClick={login}>Login</Button>
        
          <div className='w-75 mx-auto mt-4'>
             <a href="/signup" className='pe-auto col-xl-6 py-3' >No Account? Register Here</a>
          </div>
        
      </CardBody>
    </Card>
  )
}


// https://www.youtube.com/watch?v=9bXhf_TELP4
//https://www.youtube.com/watch?v=zkz2HuNR_gk