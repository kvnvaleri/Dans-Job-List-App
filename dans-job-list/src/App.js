import data from "./data.json"
import Jobs from "./components/Jobs"
import Header from "./components/Header"
import Search from "./components/Search"
// import Login from "./components/Login"
import { useState } from "react"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {


  const [setfilterKeywords] = useState("")
  
  const setSearchKeywords=(data) => {
    setfilterKeywords(data);
  }
  
  return (
    <div>
      <div className="header">
      <Header />
      </div>
      <Search setSearchKeywords />
      <Jobs data={data}/> 
    </div>
  );
}

export default App;
