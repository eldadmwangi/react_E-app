import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home'


function App() {
  return (
      <BrowserRouter>
      <Navbar/>
     <Switch>
       <Route path ='/' exact component={Home}/>
     </Switch>
     <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
