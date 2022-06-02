import SongList from './SongList';
import SongDetail from './SongDetail';

function App() {
  return (
    <>
      <br />
      <div className='ui container grid'>
        <div className='ui row'>
          <div className='column eight wide'>
            <SongList />
          </div>
          <div className='column eight wide'>
            <SongDetail />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
