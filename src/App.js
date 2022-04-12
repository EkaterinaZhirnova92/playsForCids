import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import PlayTwo from './playTwo/PlayTwo';
import PlayThree from './playThree/PlayThree';

function App() {
  return (

<Router>
  <nav>
    <Link to='/' className='link'>Первая игра</Link>
    <Link to='/PlayTwo' className='link'>Вторая игра</Link>
    <Link to='/PlayThree' className='link'>Третья игра</Link>
  </nav>

<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/PlayTwo' element={<PlayTwo />} />
  <Route path='/PlayThree' element={<PlayThree />} />
  </Routes>

</Router>

  )
  }

export default App;
