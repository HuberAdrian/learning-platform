import './App.css';
import Home from './Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Person from './components/Person';

function App() {

  return (
    <div className="App">

      {/* create routes for the different pages */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/person' element={<Person />} />
      </Routes>
    </div>
  );
}

export default App;
