// // for router 
// import Router from 'react'

import { BrowserRouter as Router,Route } from 'react-router-dom'
 
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import SingleProd from './screens/SingleProd'



const App = () => {
  return(
    <Router>
    <Header/>

    <main className="py-3" >
      <Container>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/product/:id' component={SingleProd}/>
      </Container>
    </main>
    <Footer/>
    </Router>
  )
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
