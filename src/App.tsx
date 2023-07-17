import './App.css';
import Sidebar from './components/Sidebar';
import MainRoutes from './Routes';

function App() {
  return (
    <div className="App">
      {/* <Sidebar/> */}
      <div className='sidebar-maincss'>
        <Sidebar />
      </div>
      {/* Inner Container */}
      <div className='MainRoutes-maincss'>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
