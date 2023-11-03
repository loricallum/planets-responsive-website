import './App.css';
import Header from './Header/Header';
import Mercury from './Planets/Mercury/Mercury';
import Venus from './Planets/Venus/Venus';
import Earth from './Planets/Earth/Earth';
import Mars from './Planets/Mars/Mars';
import Jupiter from './Planets/Jupiter/Jupiter';
import Saturn from './Planets/Saturn/Saturn';
import Uranus from './Planets/Uranus/Uranus';
import Neptune from './Planets/Neptune/Neptune';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Mercury/>} />
          <Route exact path='/venus' element={<Venus/>} />
          <Route exact path='/earth' element={<Earth/>} />
          <Route exact path='/mars' element={<Mars/>} />
          <Route exact path='/jupiter' element={<Jupiter/>} />
          <Route exact path='/saturn' element={<Saturn/>} />
          <Route exact path='/uranus' element={<Uranus/>} />
          <Route exact path='/neptune' element={<Neptune/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
