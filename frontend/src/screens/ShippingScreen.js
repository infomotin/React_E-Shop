import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormConteainer from '../components/FormConteainer'


const ShippingScreen = ({history}) => {
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [postCode,setPostCode] = useState('')
    const [country,setCountry] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("SubmitHandler call")
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
