
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Services from './pages/Services';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserDashboard from './pages/user-routs/UserDashboard';
import PrivateRouting from './pages/PrivateRouting';
import ProfileInfo from './pages/user-routs/ProfileInfo';
import PostPage from './pages/PostPage';

function App() {
  return (
   
    <BrowserRouter>
    <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element= {<Login />}  />
        <Route path="/signup" element= {<Signup />}  />
        <Route path="/about" element= {<About />}  />
        <Route path="/services" element= {<Services />}  />
        <Route path="/posts/:postId" element= {<PostPage />}  />

        <Route path="/user" element= {<PrivateRouting />} >
        <Route path="dashboard" element= {<UserDashboard />}  />
        <Route path="profile-info" element= {<ProfileInfo />}  />
         </Route>
      </Routes>
    </BrowserRouter>    
  
  );
}

export default App;
