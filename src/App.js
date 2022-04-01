import{ BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Friends from "./pages/Friends";
import Login from "./pages/Login";
import Message from "./pages/Message";
import News from "./pages/News";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="message" element={<Message />} />
          <Route path="friends" element={<Friends />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
