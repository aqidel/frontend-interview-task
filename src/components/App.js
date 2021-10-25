import Table from './Table';
import search_logo from '../assets/Vector.png';

function App() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className='input-wrap'>
        <div className='input-left-side'>
          <img src={search_logo} alt='vector'></img>
        </div>
        <input placeholder='What test are you looking for?'></input>
        <div className='input-right-side'>
          <span>7 tests</span>
        </div>
      </div>
      <Table/>
    </>
  );
};

export default App;