import './App.css';
import Home from './Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Person from './components/Person';

function App() {
  // make a homepage for a learning platform with a navbar, a sidebar, login and signup buttons, a footer and a main content area with a scrollable list of courses

  // create a navbar component
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
