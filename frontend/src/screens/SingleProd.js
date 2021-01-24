import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
// import products from '../products'

import Loader from "../components/Loader";
import Message from "../components/Message";
//bring productReducers

import { useDispatch, useSelector } from "react-redux";

// import React, { useState, useEffect } from 'react'
import React, { useEffect } from "react";

import { listProductDetails } from "../actions/productActions";

// import React,{useState,useEffect} from 'react'

import axios from "axios";

const SingleProd = ({ match }) => {
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
      <Row>
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
            <ListGroup.Item>
              <Row>
                <Col> Price: </Col> <Col> $ {product.price} </Col>{" "}
              </Row>{" "}
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <Row>
                <Col> Stock: </Col>{" "}
                <Col>
                  {" "}
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}{" "}
                </Col>{" "}
              </Row>{" "}
            </ListGroup.Item>{" "}
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
      </Row>{" "}
      {/* Second Eliment  */}
    </>
  );
};

export default SingleProd;
