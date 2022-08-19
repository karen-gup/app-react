import './App.css';
import { Page } from './components/Page';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
