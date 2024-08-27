import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import BackgroundLayer from "../components/BackgroundLayer";
import Navigation from "../components/Navigation";
import SlideCard from "../components/SlideCard";
import { motion } from "framer-motion";
import VideoPlayer from "../components/VideoPlayer";
import SideBar from "../components/SideBar";

const backImg1 = require("../assests/app.jpg");
const backImg2 = require("../assests/web.jpg");
const backImg3 = require("../assests/expense.jpg");
const backImg4 = require("../assests/table.jpg");
const backImg5 = require("../assests/lib.jfif");
const backImg6 = require("../assests/masks.jfif");

const video1 = require("../assests/videos/project1.mp4");

const data = [
  {
    subHead: "Menatal Health and wellness App",
    head: "Stress Management Mobile Application",
    description:
      "Our university collaboration with Paraqum company continues with the ongoing development of a mental health and well-being application. Leveraging frameworks like React(for admin panel) and React native for the frontend and Node.js for the backend, we're implementing personalized stress management tools, mood tracking features, and educational resources. This project underscores our commitment to addressing mental health challenges in today's demanding work environments through innovative technology solutions. This project not only demonstrated our technical skills but also highlighted our ability to collaborate with industry partners to tackle real-world challenges.",
    backImg: backImg1,
    pVideo: video1,
  },
  {
    subHead: "Photo Uploading platform",
    head: "Qpics",
    description:
      "Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, this project is a user-friendly platform for uploading, organizing, and sharing photos.Users can register, log in, and upload images to their accounts. The platform allows for easy management of uploaded images and offers basic account functionalities. Additionally, visitors can browse and view all images on the platform through simple search and browsing features. Future improvements aim to enhance performance and user experience.",
    backImg: backImg2,
    pVideo: "https://www.youtube.com/embed/h58WyJnWRjo?si=xUhf3FjU5KIzSVfk",
  },
  {
    subHead: "A full stack web application",
    head: "Expense Tracker Mini",
    description:
      "Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), this web application offers a basic model for expense tracking with room for improvement and expansion. Users can add and categorize income or expenses, apply filters to view past records, and maintain personalized profiles. The app also calculates and displays total expenses for specific days. With its user-friendly interface, this Expense Tracker provides a foundation for further enhancements and customization to meet evolving financial management needs.",
    backImg: backImg3,
    pVideo: "https://www.youtube.com/embed/VZRVoy3AR_8?si=arK-6emgB2qPJi-Z",
  },
  {
    subHead: "Editable table",
    head: "Table Component",
    description:
      "This React-based table component offers seamless inline editing functionality, allowing users to modify table cells directly without the need for additional pop-up windows. Users can easily search within the table to locate specific data entries. The component's versatility shines through its customizable dropdown menus within table cells, offering flexibility to tailor options for different columns and functions. With its highly customizable nature, this table component serves as a dynamic solution for displaying and manipulating tabular data in web applications.",
    backImg: backImg4,
    pVideo: "https://www.youtube.com/embed/4iIzpLkCTqI?si=CgZ3yN2_1gtHWMXO",
  },

  {
    subHead: "Interactive 3D Experience with 3JS ",
    head: "3D Wizard’s Library",
    description:
      "Immerse yourself in a magical world with my 3D scene created using Three.js. This project brings a wizard’s library with featuring interactive elements such as enchanted books, a mystical hat, and a wand. Each object reveals unique aspects of wizardry, including house assignments, spell details, and hidden secrets of the magical realm. The captivating background, smooth animations, and thematic typography work together to enhance the enchanting atmosphere, inviting users to explore and experience the world of magic in an engaging and interactive way.",
    backImg: backImg5,
    pVideo: "https://www.youtube.com/embed/Cl7iD__DBC4?si=pd66KgsGrT-YvS_Q",
  },

  {
    subHead: "Innovative Eco-Friendly Recycling Solution",
    head: "Automated Face Masks Recycling Machine",
    description:
      "Developed an innovative automated system designed to recycle face masks, transforming waste materials into reusable plastic. The project emphasized sustainability and environmental impact, showcasing the ability to efficiently convert discarded masks into a valuable resource. This machine not only addressed waste management but also contributed to eco-friendly practices, receiving positive recognition from both academic professionals and industry peers. You can find the project proposal video below.",
    backImg: backImg6,
    pVideo: "https://www.youtube.com/embed/hPacpYlYJw8?si=ITXD7n1zTtdr3YAx",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [forceRender, setForceRender] = useState(false);
  const [cardId, setCardId] = useState(0);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
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

  const handleSeeMore = () => {
    setShowVideoPlayer(true);
  };

  return (
    <motion.Box
      style={{ display: "flex", gap: "50px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <BackgroundLayer backImg={data[cardId].backImg} sHeight={sectionHeight} />

      <Box>
        <Navigation page={"2"} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          fontFamily: "poppins",
          height: "100vh",

          marginLeft: "30px",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            width: "0",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", lg: "28px" },
              marginTop: "110px",
            }}
          >
            {data[cardId].subHead}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.55 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "45px", lg: "60px" },
              fontWeight: "700",
              width: "100%",
            }}
          >
            {data[cardId].head}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.7 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "13px", lg: "16px" },
              maxWidth: "700px",
              marginTop: "10px",
            }}
          >
            {data[cardId].description}
          </Typography>
        </motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            border: "2px solid white",
            borderRadius: "10px",
            marginTop: "40px",
            marginBottom: "40px",
            width: "120px",
            padding: "8px 0",
            cursor: "pointer",
            transition: "opacity 0.25s",
            "&:hover": { opacity: 0.8 },
            "&:active": { opacity: 0.6 },
          }}
          onClick={handleSeeMore}
        >
          <Typography>See more</Typography>
        </div>
      </Box>

      <SideBar
        visibility={setRightSectionVisible}
        rightSectionVisible={rightSectionVisible}
      />

      <Box
        sx={{
          display: "flex",
          width: "20%",
          justifyContent: "center",
          color: "white",
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
            maxHeight: "100%",
            backgroundColor: {
              xs: "rgba(100,100,100,1)",
              md: "rgba(100,100,100,0.6)",
            },
            width: { xs: "85%", sm: "25vh", md: "30vh", lg: "45vh" },
            padding: "0 50px 0 30px",
            gap: "30px",
            overflowY: "scroll",
            right: { xs: "0%", lg: "5%" },
            "&::-webkit-scrollbar": {
              width: "0",
            },
          }}
        >
          <SlideCard
            head={"Stress Management Mobile Application"}
            bottom={"( Currently in developing stage)"}
            marginTop={"30px"}
            passId={0}
            id={setCardId}
            clickedCard={cardId}
            visibility={setRightSectionVisible}
          />

          <SlideCard
            head={"Automated Face Masks Recycling Machine"}
            bottom={"(Done as a first year hardware project)"}
            passId={5}
            id={setCardId}
            clickedCard={cardId}
            visibility={setRightSectionVisible}
          />

          <SlideCard
            head={"Qpics Photo Gallery"}
            sub={"Photo uploading platform"}
            bottom={"( Hope to do more improvements)"}
            passId={1}
            id={setCardId}
            clickedCard={cardId}
            visibility={setRightSectionVisible}
          />
          <SlideCard
            head={"Expense Tracker Mini"}
            sub={"A full stack web application"}
            bottom={"( Learn lot of things as a beginner)"}
            passId={2}
            id={setCardId}
            clickedCard={cardId}
            visibility={setRightSectionVisible}
          />
          <SlideCard
            head={"Table Component"}
            sub={"Editable table"}
            bottom={"(It was a requested work)"}
            passId={3}
            id={setCardId}
            clickedCard={cardId}
            visibility={setRightSectionVisible}
          />

          <SlideCard
            head={"3D Wizard’s Library"}
            sub={"Interactive 3D Experience with 3JS "}
            bottom={"(First step into 3D web design.)"}
            passId={4}
            marginBottom={"30px"}
            id={setCardId}
            clickedCard={cardId}
            visibility={setRightSectionVisible}
          />
        </Box>
      </Box>

      {showVideoPlayer && (
        <Box sx={{ position: "absolute" }}>
          <VideoPlayer
            onClose={setShowVideoPlayer}
            video={data[cardId].pVideo}
          />
        </Box>
      )}
    </motion.Box>
  );
}

export default Projects;
