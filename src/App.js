import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Activity } from './Components/Highlights/Activity';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/highlights/:activity' element={<Activity/>} />
      </Routes>
    </div>
  );
}

export default App;
