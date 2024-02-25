import { Box, Grid } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const img1 = require('../assests/my/cp3.jpg')
const img2 = require('../assests/my/cp1.jpeg')
const img3 = require('../assests/my/cp2.jpeg')
const img4 = require('../assests/my/ath1.jpeg')
const img5 = require('../assests/my/ath2.jpeg')
const img6 = require('../assests/my/ath3.jpeg')
const img7 = require('../assests/my/fit1.jpeg')
const img8 = require('../assests/my/fit2.jpeg')
const img9 = require('../assests/my/fit3.jpeg')
const img10 = require('../assests/my/h1.jpeg')
const img11= require('../assests/my/hw2.jpeg')
const img12= require('../assests/my/hw3.jpeg')
const img13= require('../assests/my/paint.jpeg')
const img14= require('../assests/my/galle.jpeg')
const img15= require('../assests/my/pre.jpeg')

const images = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,
]

function Gallery(props) {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999,
        display: 'flex',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: '20px',
          top: '20px',
          color: 'white',
          cursor: 'pointer',
          '&:active': { opacity: 0.6 },
        }}
        onClick={() => props.onClose(false)}
      >
        <CloseIcon />
      </Box>

      <Box sx={{ flexGrow: 1, padding:'50px',background:{xs:'black'}, height:{xs:'630vh', sm:'330vh', md:'210vh'}, }}>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    <AnimatePresence>
                        {images.map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Box sx={{ height: '40vh', minWidth: '300px', backgroundColor: 'transparent' }}>
                                        <img src={item} style={{ width: '100%', height: '100%', resize: 'cover' }}  alt={index}/>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </AnimatePresence>
                </Grid>
        </Box>

    </Box>
  );
}

export default Gallery;
