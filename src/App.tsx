import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { StatusCodeSelector } from './pages/StatusCodeSelector';
import { UserList } from './pages/UserList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/codeSelector" element={<StatusCodeSelector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
