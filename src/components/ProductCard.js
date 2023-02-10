import React, { useState } from 'react';
import {Button,Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import '../App.css';

function ProductCard() {
  
    return (
       
    <Card style={{width: '15rem'}}>
  <img src="assets/images/coa.png"/>
  <CardBody>
    <CardTitle tag="h5">
      Test
    </CardTitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      Test
    </CardSubtitle>
    <CardText>
     Test
    </CardText>
    <Button>
      Test
    </Button>
  </CardBody>
</Card>

  );
  
}

export default ProductCard;