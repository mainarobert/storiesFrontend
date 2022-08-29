import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Story from './pages/storyy/Story'
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/stories/:id' element={<Story/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
