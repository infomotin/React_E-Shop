import { Link} from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
// import products from '../products'

import Loader from "../components/Loader";
import Message from "../components/Message";
//bring productReducers

import { useDispatch, useSelector } from "react-redux";

import React, { useState, useEffect } from 'react'
// import React, { useEffect } from "react";

import { listProductDetails } from "../actions/productActions";

// import React,{useState,useEffect} from 'react'

import axios from "axios";

const SingleProd = ({ match,color}) => {


const [qty,setQty]= useState(0)
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails)

//   deinstructure 
const {loading,product,error} = productDetails
  // const product = products.find(p => p._id === match.params.id)
  // const [product, setProduct] = useState([])
  // Auto calling as like constractor



  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
    //     // #normal variable

    //     const fetchProduct = async () =>{
    //        const {data} = await axios.get(`/api/products/${match.params.id}`)

    //        setProduct(data)

    //    }

    // //    calling this functions
    //    fetchProduct()
  }, [dispatch, match]);
//   const product = {}
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        {" "}
        Go Back{" "}
      </Link>{" "}
  {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (<Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>{" "}
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3> {product.name} </h3>{" "}
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />{" "}
            </ListGroup.Item>{" "}
            <ListGroup.Item>Price: $ {product.price} </ListGroup.Item>{" "}
            <ListGroup.Item>Description: {product.description} </ListGroup.Item>{" "}
          </ListGroup>{" "}
        </Col>{" "}
        <Col md={3}>
          <Card>
          <ListGroup.Item >
              <Row className='justify-content-md-center'>
                <span><h4 style={{color}}>Your Product</h4></span>
              </Row>{" "}
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <Row>
                <Col> Price: </Col> <Col> $ {product.price} </Col>{" "}
              </Row>{" "}
            </ListGroup.Item>{" "}
            <ListGroup.Item variant={product.countInStock >= 0 ? "danger":"primary"}>
              <Row >
                <Col> Stock: </Col>{" "}
                <Col>
                  {" "}
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}{" "}
                </Col>{" "}
              </Row>{" "}
            </ListGroup.Item>

            <ListGroup.Item>
                <Row> 
                    <Col>Manufacture</Col>
                    <Col>Value</Col>
                </Row>
                {/* <Row>
                    <Col>Test:</Col>
                    <Col>Value</Col>
                </Row> */}
               
                
                
            </ListGroup.Item>

            <ListGroup.Item>
                <Row> 
                    <Col>Suppliare</Col>
                    <Col>Value</Col>
                </Row>
                {/* <Row>
                    <Col>Test:</Col>
                    <Col>Value</Col>
                </Row> */}   
            </ListGroup.Item> 

            <ListGroup.Item>
                <Row> 
                    <Col>Place of Home</Col>
                    <Col>Value</Col>
                </Row>
                {/* <Row>
                    <Col>Test:</Col>
                    <Col>Value</Col>
                </Row> */}   
            </ListGroup.Item>

            <ListGroup.Item>
                <Row> 
                    <Col>Delivary Time</Col>
                    <Col>Value</Col>
                </Row>
                {/* <Row>
                    <Col>Test:</Col>
                    <Col>Value</Col>
                </Row> */}   
            </ListGroup.Item>

            {/* if stock are avaale then excuting this part  */}
            {product.countInStock > 0 && (
                <ListGroup.Item>
                    <Row>
                        <Col>Qty:</Col>
                        <Col>
                            <Form.Control as ='select' value={qty} onChange={(e)=>setQty(e.target.value)}>
                               {[...Array(product.countInStock).keys()].map(x => (
                                    <option key={x+1} value={x+1}>{x+1}</option>
                               ))}
                            </Form.Control> 
                        </Col>
                    </Row>
                </ListGroup.Item>
            )}
            
            <ListGroup.Item>
              {" "}
              {/* <Row>
                                            <Col>Price:</Col>
                                            <Col>${product.price}</Col>
                                        </Row> */}
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                {" "}
                Add To Cart{" "}
              </Button>
            </ListGroup.Item>{" "}
          </Card>
        </Col>{" "}
      </Row>
      )}


    
      
    </>
  );
};


// if propartis set as array likle = [][...Array(product.countInStock).keys()].map(x =>
SingleProd.defaultProps = {
    color: '#b3f'
}



export default SingleProd;
