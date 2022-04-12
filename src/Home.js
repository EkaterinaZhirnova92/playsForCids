import MyList from './MyList';
import Gallerie from './Gallerie';

function Home() {
  return (
    <div>
  <div className='container'>
    <h1>Опиши, добавив 5 прилагательных</h1>
    </div>
    <Gallerie/>
    <br/>
    
    <MyList/>
  </div>

  )
  }

export default Home;
