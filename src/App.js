import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

const AboutView = () => {
  return (
    <h2>About us</h2>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
