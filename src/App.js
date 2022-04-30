import './App.css';
import {Routes, Route} from 'react-router-dom'
import Detail from './component/detail';
import New from './component/New';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/New/:id' element={<New/>}/>
      </Routes>
    </div>
  );
}

export default App;
