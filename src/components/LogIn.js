import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Button } from 'reactstrap'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'
import { useState } from 'react';

export default function LogIn() {


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = async () => {
    try {
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
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
             <a href="#" className='pe-auto col-xl-6 py-3'>No Account? Register Here</a>
          </div>
        
      </CardBody>
    </Card>
  )
}


// https://www.youtube.com/watch?v=9bXhf_TELP4