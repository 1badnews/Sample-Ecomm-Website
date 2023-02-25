import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {Button,Card, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup} from 'reactstrap';
import '../App.css';
import { db, storage } from '../firebase';
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";

function AddProduct() {
  
    const [text0,setText0] = useState('')
    const [text1,setText1] = useState('')
    const [text2,setText2] = useState('')
    const [file,setFile] = useState('')
    const [image, setImage] = useState('')

    useEffect((text0)=> {
        const uploadFile = () => {
            const name = text0 + new Date().getTime()
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((imageurl) => {
        setImage(imageurl)
    })
    
  }
);
        };
        file && uploadFile()
            
    },[file])

  const CreateProduct = async (e) => {
    e.preventDefault(e)
    console.log(image)
    await addDoc(collection(db,'products'), {
        text:text0,
        text1:text1,
        text2:text2,
        image:image
    })
  }

    return (
        <Card className='w-50 mx-auto mt-5'>
            <CardTitle><h1>Add a Product</h1></CardTitle>
            <CardBody>
                <Form onSubmit={CreateProduct}>
                    <FormGroup className=''>
                        <input type="text" value={text0} onChange={(e) =>setText0(e.target.value)} placeholder='text' className='form-control w-50 mx-auto'></input>
                    </FormGroup>
                    <FormGroup className=''>
                        <input type="text" value={text1} onChange={(e) =>setText1(e.target.value)}placeholder='text1'  className='form-control w-50 mx-auto'></input>
                    </FormGroup>
                    <FormGroup className=''>
                        <input type="text" value={text2} onChange={(e) =>setText2(e.target.value)}placeholder='text2' className='form-control w-50 mx-auto'></input>
                    </FormGroup>
                    <FormGroup className=''>
                        <input type="file" placeholder='image' onChange={(e) => setFile(e.target.files[0])} className='form-control w-50 mx-auto'></input>
                    </FormGroup>
                    <Button type="submit">
                        ADD
                    </Button>
                </Form>
            </CardBody>
        </Card>

  );
  
}

export default AddProduct;