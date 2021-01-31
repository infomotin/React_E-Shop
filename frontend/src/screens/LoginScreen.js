import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loading from '../components/Loader'
import FormConteainer from '../components/FormConteainer'
import {login} from '../actions/userActions'



const LoginScreen = () => {

    const submitHandelerClick = []
    const redirect = []

    const {email,setEmail} = useState('')
    const {password,setPassword} = useState('')

    return (
        <FormConteainer>
            <h1>SignIn</h1>
        <Form onSubmit={submitHandelerClick}>
            <Form.Group controlId='email'>
                <Form.Label>
                    Email Adress
                </Form.Label>
                <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>Sign In </Button>

        </Form>
        <Row className='py-3'> 
            <Col>
                New Customer ? <link to={redirect ? `/register?redirect=${redirect}`:'/register'}>Register</link>
            </Col>
        </Row>
        </FormConteainer>
    )
}

export default LoginScreen
