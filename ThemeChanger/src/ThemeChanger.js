import './App.css';
import React from 'react'
import {useState} from 'react'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
export const ThemeChanger = React.createContext();
function App() {
  const [theme,setTheme] = useState("dark");

  const changeTheme = () => {
    if(theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  return (
    <>
      <button type = "button" onClick={() => changeTheme()}> Change Theme</button>
      <ThemeChanger.Provider value = {theme}>
        <NavBar></NavBar>
        <Footer></Footer>
      </ThemeChanger.Provider>
    </>
  );
}

export default App;
