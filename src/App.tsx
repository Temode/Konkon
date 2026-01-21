import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/theme';
import Home from './components/home/Home';
import Login from './components/auth/login';
import Register from './components/auth/register';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
