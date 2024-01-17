import './App.css';
import {Route ,Routes  , BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import TodoApp from './TodoApp';

 

function App() {
  return (
    <Router> 
      <div className='container'>
        <Routes>
          <Route  path="/ToDoApp_ReactJS" element={<TodoApp/>} ></Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
