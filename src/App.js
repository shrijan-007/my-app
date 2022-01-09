// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Formarea'
import { useState } from 'react';

// import Navbar from './components/Navbar';


function App() {
  const [eleStyle,setElestyle] = useState(
    {
      'color':'black',
      'background':'white'
    }
  );
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      setElestyle(
        {
          'color':'white',
          'background':'#272e33'
        }
      );

    }else{
      setMode('light');
      setElestyle({
        'color':'black',
        'background':'white'
      });
    }
  }
  return (  
    <>
    <Navbar pMode = {mode} toggleMode = {toggleMode} eleStyle = {eleStyle.color}/>
    <Textarea heading = "Enter your text" eleStyle = {eleStyle}/>
    </>
  );
}

export default App;
