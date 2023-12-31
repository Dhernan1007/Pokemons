import './App.css';
import {Route, useLocation} from 'react-router-dom'
import {Detail, Home, Form, Landing} from './views'
import NavBar from './components/NavBar/NavBar';
// import { useEffect } from 'react';
// import {getAllpokemon } from './redux/actions';
// import { useDispatch } from 'react-redux';

function App() {
//   const dispatch = useDispatch()
// useEffect(() => {
//  dispatch(getAllpokemon())
// }) 


  const location = useLocation()
//location para que la navbar no se muestre en barra landing, pero si en las otras rutas
  return (
    <div className="App">
     {location.pathname !== '/' && <NavBar/>} 
        <Route exact path ='/' component={Landing}/>
        <Route path ='/home' component={Home}/>
        <Route path ='/detail/:id' component={Detail}/>
        <Route path ='/create' component={Form}/>

    </div>
  );
}

export default App;

