import './App.css';
import Home from './Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Person from './components/Person';
import Login from './components/Login';

function App() {

  return (
    <div className="App">

      {/* create routes for the different pages */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/person' element={<Person />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
