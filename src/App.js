import{ useContext, useState } from "react";

import{ BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Message from "./pages/Message";
import News from "./pages/News";
import NoPage from "./pages/NoPage";
import CreatePost from "./pages/CreatePost";
import Logout from "./pages/Logout";
import AuthProvider, { AuthContext } from "./context/auth";
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  //const { user } = useContext(AuthContext);
 

  return (
    <AuthProvider>
      <div className="App">
    <BrowserRouter>
      <nav>
        <div className="news_post">
          <Link to="/"> News </Link>
        </div>
        
        <div className="login">
          {!isAuth ? <Link to="/login"> Login </Link> : (
            <div>
              <Link to="/profile"> Profile </Link>
              <Link to="/messanger"> Messages </Link>
              <Link to="/createpost"> Create Post </Link>
              <Link to="/logout">Logout</Link> 
            </div>
          )  
          } 
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<News isAuth={isAuth} />} />
          <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="logout" element={<Logout setIsAuth={setIsAuth} />} />
          <Route path="messanger" element={<Message />} />
          <Route path="friends" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
