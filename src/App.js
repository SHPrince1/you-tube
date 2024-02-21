import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbars/navbar';
import Sidenav from '../src/components/navbars/sidenav';
import TopNav from './components/navbars/top-nav';

function App() {
  return (
    <div className="App">
     <Navbar />
     <TopNav />
     <Sidenav />
    </div>
  );
}

export default App;
