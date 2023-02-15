import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Button } from 'reactstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'
import { useState } from 'react';
export default function Signup() {


  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
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
      <h1>Signup</h1> 
      </CardTitle>
      <CardBody className>
        <Form>
        <div className='w-75 mx-auto'>
        <FormGroup className='pb-2'>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(event) => {setRegisterEmail
          (event.target.value);}}/>
        </FormGroup>
        <FormGroup className='pb-2'>
          <input type="password" class="form-control" id="exampleInputEmail1" placeholder="Password" onChange={(event) => {setRegisterPassword
          (event.target.value);}}/>
        </FormGroup>
        </div>
        </Form>
        <Button className='w-25 py-2' onClick={register}>Register</Button>
        
          <div className='w-75 mx-auto mt-4'>
             <a href="#" className='pe-auto col-xl-6 py-3'>Have an account? Login here</a>
          </div>
        
      </CardBody>
    </Card>
  )
}
