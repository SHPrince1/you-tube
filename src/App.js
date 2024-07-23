
import "./App.css";

import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Navbar from "../src/components/navbars/navbar";
import Sidenav from "../src/components/navbars/sidenav";
import TopNav from "./components/navbars/top-nav";
// import VideoCard from "./components/navbars/videos/video-card";
import AllVideos from "./components/navbars/videos/all-video";
// import TestComp from "./components/navbars/videos/testComp";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <TopNav />
        <Sidenav />
        {/* <AllVideos /> */}
        
      </div>

      <div className="DivRouter">
        <Router>
          <Routes>
            <Route exact path="/" element={<AllVideos />} />
            
            {/* <Route exact path="page1" element={<Page1 />} />
            <Route exact path="page2" element={<Page2 />} />
            <Route exact path="page3" element={<Page3 />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
