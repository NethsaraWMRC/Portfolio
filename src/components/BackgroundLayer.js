import { Box } from '@mui/material'
import React from 'react'

function BackgroundLayer(props) {
  return (
    <Box>
        <Box sx={{
        position:'absolute',
        backgroundImage: `url(${props.backImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: props.sHeight, 
        width:'100%',
        zIndex:-2
        
        }}></Box>

        <Box sx={{position:'absolute',height:props.sHeight,width:'100%', backgroundColor:'black', opacity:0.65,zIndex:-1 }}> </Box>
    </Box>
  )
}

export default BackgroundLayer
