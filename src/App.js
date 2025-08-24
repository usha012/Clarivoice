import './App.css';
import "./Assets/Sass/style.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>


      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
