import NavBar from "./Components/Navbar/NavBar";
import React from "react";
import './app.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, originals } from "./urls";


function App() {
  return (
    <div className="App">
  <NavBar/>
  <Banner/>
  <RowPost urls={action} title='Action' />
  <RowPost urls={originals} title='Netflix Originals' isSmall/>
 
  </div>
  );
}

export default App;
