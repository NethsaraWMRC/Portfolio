import React, { useState, useEffect, useRef } from "react";
import backImg from "../assests/back.jfif";
import { Box, Typography } from "@mui/material";
import BackgroundLayer from "../components/BackgroundLayer";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import Gallery from "../components/Gallery";

const description =
  "I'm a Full Stack Developer specializing in the MERN stack with a strong command of JavaScript. My passion lies in pushing the boundaries of traditional development by innovating and exploring new possibilities. With a keen eye for creativity and a drive to tackle challenges head-on, I strive to create innovative solutions that not only meet but exceed expectations.";

function Home() {
  const sectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [forceRender, setForceRender] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  useEffect(() => {
    const calculateInitialHeight = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
    };
    calculateInitialHeight();

    const handleResize = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
      setForceRender((prevState) => !prevState);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [forceRender]);

  return (
    <motion.Box
      style={{ display: "flex", gap: "50px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <BackgroundLayer backImg={backImg} sHeight={sectionHeight} />

      <Box>
        <Navigation page={"1"} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontFamily: "poppins",
          height: "100%",
          marginLeft: "30px",
        }}
      >
        <motion.Typography
          style={{ fontSize: "28px", marginTop: "110px" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
        >
          Full Stack Developer
        </motion.Typography>

        <motion.Typography
          style={{ fontSize: "60px", fontWeight: "700" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.55 }}
        >
          Ravindu Nethsara
        </motion.Typography>

        <motion.Typography
          style={{ fontSize: "16px", maxWidth: "700px", marginTop: "10px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.7 }}
        >
          {description}
        </motion.Typography>

        <Box
          sx={{
            width: "120px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            border: "2px solid white",
            borderRadius: "10px",
            marginTop: "40px",
            cursor: "pointer",
            transition: "opacity 0.3s ease",
            "&:hover": { opacity: 0.8 },
            "&:active": { opacity: 0.6 },
          }}
          onClick={() => {
            setGalleryVisible(true);
          }}
        >
          <Typography>Explore</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: { sm: "block", md: "flex" },
          width: "50%",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Box
          ref={sectionRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            minHeight: "100%",
            backgroundColor: "rgba(100,100,100,0.4)",
            width: "45vh",
            padding: "0 30px",
            right: "5%",
          }}
        >
          <motion.Box
            style={{
              height: "30vh",
              width: "100%",
              marginTop: "20px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, transform: "scale(1.5)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 1 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                "&:hover": { transform: "scale(1.2)" },
                transition: "transform 0.25s",
              }}
            >
              <img
                src={require("../assests/proPic.jpg")}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                alt="profile"
              />
            </Box>
          </motion.Box>

          <motion.Box
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              marginTop: "15px",
              padding: "15px",
              borderRadius: "15px",
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 1.4 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                "&:hover": { opacity: 0.6 },
                transition: "opacity 0.25s",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Programming skill
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                React
                <br />
                React Native
                <br />
                Java <br />C Programming
              </Typography>
            </Box>
          </motion.Box>

          <motion.Box
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              marginTop: "15px",
              padding: "15px",
              borderRadius: "15px",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.25s",
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 1.6 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                "&:hover": { opacity: 0.6 },
                transition: "opacity 0.25s",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                An Athlete
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Dedicated to rigorous training and achieving peak performance
                levels in sprinting. Skilled in various sports with discipline
                in training and performance.{" "}
              </Typography>
            </Box>
          </motion.Box>

          <motion.Box
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              marginTop: "15px",
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "15px",
              "&:hover": { opacity: 0.8 },
              transition: "opacity 0.25s",
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 1.8 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                "&:hover": { opacity: 0.6 },
                transition: "opacity 0.25s",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Artistic Talents
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Proficient in creating captivating wall paintings, blending
                colors and concepts to produce visually appealing artwork.
              </Typography>
            </Box>
          </motion.Box>
        </Box>
      </Box>

      {galleryVisible && <Gallery onClose={setGalleryVisible} />}
    </motion.Box>
  );
}

export default Home;
