import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';




function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path=':id' element={<Post />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;