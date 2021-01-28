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
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId]);

  const removeFromCartHandler = (id) => {
    console.log(id);
  };
  const checkOutHendler = () => {
    history.push('/login?redirect=shippingaddress')
    console.log('if login')
  };

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
                      <Link to={`/product/${items.product}`}>{items.name}</Link>
                    </Col>

                    <Col md={2}>{`$:${items.price}`}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={items.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(items.product, Number(e.target.value))
                          )
                        }
                      >

                        {[...Array(items.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>

                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="dark"
                        onClick={() => removeFromCartHandler(items.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2> Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) Items </h2>
              ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}

            </ListGroup.Item>

            <ListGroup.Item>
              <Button type='button' variant='dark' className='btn-block' disabled={cartItems.length === 0} onClick={checkOutHendler} >
                <i className="fas fa-shopping-cart">
                  Check Out
                </i>
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>


      {/* <Col md={2}></Col> */}
    </Row>
  );
};
export default CartScreen;
