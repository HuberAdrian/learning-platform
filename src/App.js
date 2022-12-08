import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  // make a homepage for a learning platform with a navbar, a sidebar, login and signup buttons, a footer and a main content area with a scrollable list of courses

  // create a navbar component
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
