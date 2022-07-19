import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Protected from './auth/Protected';
import Navbar from './components/Navbar';
import Alltodos from './pages/Admin/Alltodos';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        {/* protected */}
        {/* <Route path='/todo' element={<Todo />} /> */}
        <Route path='/todo' element={<Protected element={<Todo />} />} />
        <Route path='/admin/alltodo' element={<Protected element={<Alltodos />} />} />
        {/* protected */}
        <Route path='*' element={<PageNotFound />} />


      </Routes>

    </BrowserRouter>


  );
}

export default App;
