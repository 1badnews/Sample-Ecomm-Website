import React, { useEffect, useState } from 'react';
import {Jumbotron} from 'reactstrap';
import ProductCard from './ProductCard';
import '../App.css';
import { db } from '../firebase';
import { doc, onSnapshot, query, querySnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function RenderJumbotron()
{
    return(
        <div class="mt-3 p-5 mb-4 rounded-5 jumbotron shadow" >
        <div class="container-fluid pb-5">
            <div className='row'>
                <div className='col-md-8 col-sm-9 col-12'>
                    <img src="assets/images/logo1.png" height="150" width="200" className='' align="center"></img>
                </div>
            </div>
          <div className='row'>
          <p className="col-md-8 col-sm-9 col-12 fs-3 fw-bold text-prim">Indulge in the art of tea, where every sip takes you on a journey of comfort, tradition and pure bliss.</p>
          <div className='col-md-4'/>
          </div>
        </div>
      </div>
    )
}

function RenderCard()
{

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const q = query(collection(db,'products'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let productsArr = []
            querySnapshot.forEach((doc) => {
                productsArr.push({...doc.data(), id: doc.id})
            });
        setProducts(productsArr);
        })
        return () => unsubscribe()
    }, [])

    console.log(products)

    return (
       
        <div className='container pt-5'>
            
                {products.map((product, index)=> (

                    <div className='col-4 col-md m-1' align="center">
                    <ProductCard key={index} product={product}/>
                    </div>
                ))}



                
            </div>
            
        
        
    )
}

function Home()
{
    

    return(
    <div className='home'>
     <RenderJumbotron/>
     <RenderCard/>
     </div>
    )
    
}

export default Home;