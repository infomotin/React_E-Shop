import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loading from '../components/Loader'
import FormConteainer from '../components/FormConteainer'
import {register} from '../actions/userActions'



const RegisterScreen = ({location,history}) => {


    const [name,setName] = useState(' ')
    const [email,setEmail] = useState(' ')
    const [password,setPassword] = useState(' ')
    const [confirmPassword,setConfirmPassword] = useState(' ')
    const [message,setMessage] = useState(null)

    const dispatch = useDispatch()
    const userRegister = useSelector(state=>state.userRegister)
    const {loading,error,userInfo} = userRegister

    const redirect = location.search ? location.search.split('=')[1]:'/'

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])

    const submitHandelerClick = (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage("Password Not Mess")
        }else{
            dispatch(register(name,email,password))
        }
        //  dispath register user 
    }
    return (
        <FormConteainer>
            <h1>Register A New User</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loading />}
        <Form onSubmit={submitHandelerClick}>
            <Form.Group controlId='name'>
                <Form.Label>
                    User Name
                </Form.Label>
                <Form.Control type='text' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>
                    Email Adress
                </Form.Label>
                <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
                <Form.Label>
                    Conform Password
                </Form.Label>
                <Form.Control type='password' placeholder='Conform Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>Register </Button>

        </Form>
        <Row className='py-3'> 
            <Col>
                Have an Account ?<Link to={redirect ? `/login?redirect=${redirect}`:'/login'}>Login</Link>
            </Col>
        </Row>
        </FormConteainer>
    )
}

export default RegisterScreen
