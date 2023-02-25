import React, { useState } from 'react';
import {Button,Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import '../App.css';

function ProductCard(product) {
  
  console.log(product.product.text)

    return (
    <Card style={{width: '15rem'}}>
  <img src={product.product.image}/>
  <CardBody>
    <CardTitle tag="h5">
      {product.product.text}
    </CardTitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      {product.product.text1}
    </CardSubtitle>
    <CardText>
      {product.product.text2}
    </CardText>
    <Button>
      OK
    </Button>
  </CardBody>
</Card>

  );
  
}

export default ProductCard;