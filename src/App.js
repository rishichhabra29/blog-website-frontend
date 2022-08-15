import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  const user=false;
  return (
    <Router>
   <TopBar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/write" element={<Write/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/post/:postId" element={<Single/>}/>
    <Route path="/post/:postId/register" element={user?<Home/>:<Register/>}/>
    <Route path="/post/:postId/login" element={user?<Home/>:<Login/>}/>
    <Route path="/post/:postId/write" element={user?<Write/>:<Register/>}/>
    <Route path="/post/:postId/settings" element={user?<Settings/>:<Register/>}/>
   </Routes>
   </Router>
  );
}

export default App;
