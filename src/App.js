import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home'
import Products from './components/pages/ProductsPage/Products';
import Services from './components/pages/Services/Services'


function App() {
  return (
      <BrowserRouter>
      <Navbar/>
     <Switch>
       <Route path ='/' exact component={Home}/>
       <Route path ='/Products' exact component={Products}/>
       <Route path ='/Services' exact component={Services}/>
     </Switch>
     <Footer/>
      </BrowserRouter> 
    
  );
}

export default App;
