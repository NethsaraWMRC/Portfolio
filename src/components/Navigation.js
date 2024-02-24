import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation(props) {
  const navigation = useNavigate();
  const [activeBtn, setActiveBtn] = useState(props.page);

  const handleClick = (id) => {
    setActiveBtn(id);
    if (id === '1') {
      navigation('/')
    }else if(id==='2'){
      navigation('/projects')
    } else if(id==='3')
      navigation('/contact')
    
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: '100vh', gap: '70px', position: 'fixed' }}>

      <div style={{ opacity: activeBtn === '1' ? '1' : '0.6', height: activeBtn === '1' ? '25px' : '15px', width: activeBtn === '1' ? '25px' : '15px', borderRadius: '50px', backgroundColor: 'white', cursor: 'pointer' }} onClick={() => handleClick('1')}></div>
      <div style={{ opacity: activeBtn === '2' ? '1' : '0.6', height: activeBtn === '2' ? '25px' : '15px', width: activeBtn === '2' ? '25px' : '15px', borderRadius: '50px', backgroundColor: 'white', cursor: 'pointer' }} onClick={() => handleClick('2')}></div>
      <div style={{ opacity: activeBtn === '3' ? '1' : '0.6', height: activeBtn === '3' ? '25px' : '15px', width: activeBtn === '3' ? '25px' : '15px', borderRadius: '50px', backgroundColor: 'white', cursor: 'pointer' }} onClick={() => handleClick('3')}></div>

      <Box sx={{ position: 'absolute', height: '170px', width: '2px', backgroundColor: 'white', zIndex: -1, opacity: 0.2 }}></Box>

    </Box>
  );
}

export default Navigation;
