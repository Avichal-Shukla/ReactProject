import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import NewsContainer from './components/NewsContainer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// 'Switch' is now replaced by 'Routes' in latest versions of react-router-dom

function App() {

  // Setting the selected country
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const [myTheme, setMyTheme] = useState("light");            // Enable light or dark mode
  const changeTheme = () => {
      if(myTheme === 'light')
      {
        setMyTheme('dark');                               // setting Dark Mode
        document.body.style.backgroundColor = "#16132b";
      }
      else
      {
        setMyTheme('light');                              // setting Light Mode
        document.body.style.backgroundColor = "white";
      }
  }

  return (
    <>
    <Router>
        <NavBar onCountryChange={handleCountryChange} theme={myTheme} changeTheme={changeTheme}/>
        <Routes>
            <Route path="/" element={<NewsContainer key="general" category="general" country={selectedCountry} theme={myTheme}/>} />
            <Route path="/sports" element={<NewsContainer key="sports" category="sports" country={selectedCountry} theme={myTheme}/>} />
            <Route path="/health" element={<NewsContainer key="health" category="health" country={selectedCountry} theme={myTheme}/>} />
            <Route path="/technology" element={<NewsContainer key="technology" category="technology" country={selectedCountry} theme={myTheme}/>} />
            <Route path="/entertainment" element={<NewsContainer key="entertainment" category="entertainment" country={selectedCountry} theme={myTheme}/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
