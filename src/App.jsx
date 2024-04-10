import React, { useState } from 'react'
import './App.css'
import { Button, Container } from '@mui/material';

export default function App() {
  const [light, setLight] = useState(false);
  const toggleBulb =() =>{
    setLight(!light);
  };
  return (
    <Container maxWidth="md">
      <div className='box'>
       <div className="color">
      <div className={`bulb ${light ? 'on' : 'off'}`} onClick={toggleBulb}></div>
      <Button variant="contained" className='button' onClick={toggleBulb}>{light ? 'Turn off' : 'Turn on'}</Button>
      
    </div>
    </div>
    </Container>
    
    
      
  );
}

