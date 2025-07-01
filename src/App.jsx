import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Search from './pages/Search';
import Messages from './pages/Messages';
import Create from './pages/Create';
import PrivateRoute from './routes/PrivateRoute';
import AppLayout from './layouts/AppLayout';
import { ROUTES } from './routes/routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/app' element={<PrivateRoute><AppLayout /></PrivateRoute>}>
        <Route path='home' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='imbox' element={<Messages />} />
        <Route path='create' element={<Create />} />
      </Route>
    </Routes>
  );
}

export default App;
