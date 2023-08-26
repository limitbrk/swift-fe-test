import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Test1 from './containers/Test1';
import Test2 from './containers/Test2';
import { Provider } from "react-redux"
import { store } from './redux';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Test1' element={<Test1 />} />
            <Route path='/Test2' element={<Test2 />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
