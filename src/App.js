import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/' exact>
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
