import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormConteainer from '../components/FormConteainer'
import {saveShippingAdress} from '../actions/cartActions'


const ShippingScreen = ({history}) => {
    // get data from stage 
    const cart = useSelector(state=>state.cart.cart)
    const {shippingAddress} = cart


    const [address,setAddress] = useState(shippingAddress.address)
    const [city,setCity] = useState(shippingAddress.city)
    const [postCode,setPostCode] = useState(shippingAddress.postCode)
    const [country,setCountry] = useState(shippingAddress.country)
    // create dispath 
    const dispatch = useDispatch()

    
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(saveShippingAdress({address,city,postCode,country}))
        history.push('/payment')
        console.log("/payment call")
    }


    return (
        <FormConteainer>
            <h1>Shipping</h1> 

            <Form onSubmit={submitHandler}>
            
            <Form.Group controlId='address'>
                <Form.Label>
                Address
                </Form.Label>
                <Form.Control type='text' placeholder='Enter Your Address' value={address} onChange={(e) => setAddress(e.target.value)}
                required={true}></Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
                <Form.Label>
                    City Name
                </Form.Label>
                <Form.Control type='text' placeholder=' City Name' value={city} onChange={(e) => setCity(e.target.value)} required={true}></Form.Control>
            </Form.Group>

            <Form.Group controlId='postCode'>
                <Form.Label>
                    Postal Code
                </Form.Label>
                <Form.Control type='text' placeholder='Enter Postal Code' value={postCode} onChange={(e) => setPostCode(e.target.value)} required></Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
                <Form.Label>
                Country
                </Form.Label>
                <Form.Control type='text' placeholder='set Country' value={country} onChange={(e) => setCountry(e.target.value)} required></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'> Continue </Button>

        </Form>

           
        </FormConteainer>
    )
}

export default ShippingScreen
