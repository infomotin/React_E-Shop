import {Col,Row} from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'



import React,{useState,useEffect} from 'react'

import axios from 'axios'

const HomeScreen = () => {


    const [products,setProducts] = useState([])


    // Auto calling as like constractor 
    useEffect( () => {
        // #normal variable 

        const fetchProducts = async () =>{
           const {data} = await axios.get('api/products')

           setProducts(data) 

       }

    //    calling this functions 
       fetchProducts()
    },[])



    return ( 
        <>
            <h1>Latest Products </h1>


                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                        </Col>
                    ))}

                </Row>
            
        </>
    )
}

export default HomeScreen



   {/* <h3>
                           Name: {product.name} 
                        </h3>
                        <h4>
                           Price: {product.price} 
                        </h4> */}
{/* <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3} >
                     
                        <Product product={product}/>

                    </Col>

                ))}

            </Row> */}