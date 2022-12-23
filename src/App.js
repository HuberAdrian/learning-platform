import './App.css';
import Home from './Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Person from './components/Person';
import Login from './components/Login';
import AzubiStart from './AzubiStart';
import AusbilderStart from './AusbilderStart';
import CourseExample from './components/CourseExample';


function App() {

  return (
    <div className="App">

      {/* create routes for the different pages */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/person' element={<Person />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Azubi' element={<AzubiStart />} />
        <Route path='/Ausbilder' element={<AusbilderStart />} />
        <Route path='/KursBsp1' element={<CourseExample />} />
        <Route path='*' element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
