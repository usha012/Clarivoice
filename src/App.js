import './App.css';
import "./Assets/Sass/style.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>


      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
