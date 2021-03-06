// // for router 
// import Router from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import SingleProd from './screens/SingleProd'
import CartScreen from './screens/CartScreen' 
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'





const App = () => {
    return (
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/shippingaddress" component={ShippingScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/users" component={RegisterScreen} />
            <Route path="/product/:id" component={SingleProd}/>
            <Route path="/Cart/:id?" component={CartScreen}/>
            <Route path="/" component={HomeScreen} exact />
          </Container>{" "}
        </main>{" "}
        <Footer />
      </Router>
    );
}



export default App;
//   <>
//   <Header/>
//  < main>
//   <h1>WeleCome To ProShop</h1>
// </ main>
// <Footer/>
// </>

// function App() {
//   return (
//     <>
//     <h1>WeleCome To ProShop</h1>
//     </>
//   );
// }