import React, { useState, useEffect, useRef } from "react";
import backImg from "../assests/back.jfif";
import { Box, Typography } from "@mui/material";
import BackgroundLayer from "../components/BackgroundLayer";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import Gallery from "../components/Gallery";
import SideBar from "../components/SideBar";

const description =
  "I'm a Full Stack Developer specializing in the MERN stack with a strong command of JavaScript. My passion lies in pushing the boundaries of traditional development by innovating and exploring new possibilities. With a keen eye for creativity and a drive to tackle challenges head-on, I strive to create innovative solutions that not only meet but exceed expectations.";

function Home() {
  const sectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [forceRender, setForceRender] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [rightSectionVisible, setRightSectionVisible] = useState(false);

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
          visibility: {
            xs: rightSectionVisible ? "hidden" : "visible",
            sm: "visible",
          },
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", md: "28px" },
              marginTop: "110px",
            }}
          >
            Full Stack Developer
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.55 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "50px", md: "60px" },
              fontWeight: "700",
            }}
          >
            Ravindu Nethsara
          </Typography>
        </motion.div>

        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.7 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              width: "100%",
              marginTop: "10px",
            }}
          >
            {description}
          </Typography>
        </motion.div>

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

      <SideBar
        visibility={setRightSectionVisible}
        rightSectionVisible={rightSectionVisible}
      />

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: rightSectionVisible ? 1 : 0,
          width: rightSectionVisible ? "100%" : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",

            color: "white",
            height: "100vh",
          }}
        >
          <Box
            ref={sectionRef}
            sx={{
              visibility: {
                xs: rightSectionVisible ? "visible" : "hidden",
                lg: "visible",
              },
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              minHeight: "100%",
              backgroundColor: {
                xs: "rgba(10,10,10,1)",
                md: "rgba(100,100,100,0.4)",
              },
              width: { xs: "50%", sm: "30%", md: "30%", lg: "45vh" },
              padding: "0 50px 0 30px",
              right: { xs: "0%", lg: "5%" },
              alignItems: "center",
            }}
          >
            <motion.Box
              style={{
                width: "100%",
                marginTop: "30px",
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
                  height: { xs: "22vh", md: "40vh" },
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
                width: "100%",
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
                width: "100%",
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
                width: "100%",
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
      </motion.div>

      {galleryVisible && <Gallery onClose={setGalleryVisible} />}
    </motion.Box>
  );
}

export default Home;
