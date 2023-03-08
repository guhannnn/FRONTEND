
import './App.css';
import DeleteDetail from './delete';
import Adhardetails from './get';
import Main from './project';
import Enter from './post';
import UpdateDetails from './put';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/get' element={<Adhardetails/>}/>
      <Route path='/put' element={<UpdateDetails/>}/>
      <Route path='/delete' element={<DeleteDetail/>}/>
      <Route path='/post' element={<Enter/>}/>
    </Routes>
  );
}

export default App;

