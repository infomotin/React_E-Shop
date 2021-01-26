import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";

import { addToCart } from "../actions/cartActions";

export const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  //descriptions are location.search.split('=')[1] in url
  // its are qty=value we only want the value fro that splite it with '=' and array ['qty','value'] so that value = [1]
  // dispatch can call actions

  const qty = location.search ? Number(location.search.split("=")[1]) : 0;
  // console.log(qty);

  const dispatch = useDispatch();
  //firing this tiger from store
  const cartList = useSelector((state) => state.cartList);
  //de structure data type from store data house
  const { cartItems } = cartList;

  console.log(cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, qty));
    }
  }, [dispatch, productId]);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            No Product Adding On Cart <Link to="/"> Go Home </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((items) => (
              <ListGroup.Item key={items.product}>
                <Row>
                  <Col md={2}>
                    <Image src={items.image} alt={items.name} fluid />
                  </Col>
                  <Col md={3}>
                    <Link to={`/api/products/${items.product}`}>
                      {items.name}
                    </Link>
                  </Col>

                  <Col md={2}>{`$:${items.price}`}</Col>
                  <Col md={2}>{`Qty:${items.qty}`}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};
export default CartScreen;
