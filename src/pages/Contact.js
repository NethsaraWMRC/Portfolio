import React, { useState, useEffect, useRef } from "react";
import backImg from "../assests/2.jpg";
import { Box, Typography } from "@mui/material";
import BackgroundLayer from "../components/BackgroundLayer";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [forceRender, setForceRender] = useState(false);

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

  const sendEmail = (e) => {
    // console.log(name, email, message);

    emailjs
      .send(
        "service_c067iul",
        "template_ea5639q",
        {
          from_email: email,
          from_name: name,
          message: message,
        },
        {
          publicKey: "_egQqddAmRGMt_IAD",
        }
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
        },
        (error) => {
          alert("Failed to send your message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <motion.Box
      style={{ display: "flex", gap: "50px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <BackgroundLayer backImg={backImg} sHeight={sectionHeight} />

      <Box>
        <Navigation page={"3"} />
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
        <Typography sx={{ fontSize: "28px", marginTop: { md: "110px" } }}>
          Contact me for any clarifications
        </Typography>

        <Box sx={{ marginTop: "30px" }}>
          <Typography sx={{ fontSize: "16px", color: "white" }}>
            First Name
          </Typography>
          <input
            value={name}
            style={{
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.7)",
              width: "40vw",
              outline: "none",
              border: "none",
              borderBottom: "2px solid white",
              height: "30px",
              fontSize: "14px",
              fontWeight: "300",
            }}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography sx={{ fontSize: "16px", color: "white" }}>
            Email
          </Typography>
          <input
            value={email}
            style={{
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.7)",
              width: "40vw",
              outline: "none",
              border: "none",
              borderBottom: "2px solid white",
              height: "30px",
              fontSize: "14px",
              fontWeight: "300",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography
            sx={{ fontSize: "16px", color: "white", marginBottom: "10px" }}
          >
            Write to me
          </Typography>
          <textarea
            value={message}
            style={{
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.7)",
              width: "40vw",
              outline: "none",
              border: "none",
              borderBottom: "2px solid white",
              fontSize: "14px",
              fontWeight: "300",
              height: "35px",
              scrollbarWidth: "none" /* Hide standard scrollbar for Firefox */,
              "-ms-overflow-style":
                "none" /* Hide standard scrollbar for Internet Explorer and Edge */,
              "&::-webkit-scrollbar": {
                width:
                  "0" /* Hide scrollbar width for webkit browsers like Chrome and Safari */,
              },
            }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>

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
            transition: "opacity 0.25s",
            "&:hover": { opacity: 0.8 },
            "&:active": { opacity: 0.6 },
          }}
          onClick={sendEmail}
        >
          <Typography>Send</Typography>
        </Box>

        <Typography sx={{ position: "absolute", bottom: "30px" }}>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/nethsarawmrc"
            style={{
              textDecoration: "none",
              marginRight: "5px",
              color: "#5c93e6",
            }}
          >
            {" "}
            www.linkedin.com/in/nethsarawmrc
          </a>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "50%",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Box
          ref={sectionRef}
          sx={{
            visibility: { xs: "hidden", md: "visible" },
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            minHeight: "100%",
            maxHeight: "100%",
            backgroundColor: "rgba(100,100,100,0.6)",
            width: { md: "20vh", lg: "45vh" },
            padding: "0 30px",
            gap: "30px",
            justifyContent: "center",
            right: "5%",
            "&::-webkit-scrollbar": {
              width: "0",
            },
          }}
        >
          <motion.Typography
            style={{
              fontSize: "50px",
              fontWeight: "600",
              maxWidth: "40vh",
              lineHeight: "70px",
              background: "-webkit-linear-gradient(left, #fff, #EA3603)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
          >
            Connecting dots, bridging gaps, one message at a time.
          </motion.Typography>
        </Box>
      </Box>
    </motion.Box>
  );
}

export default Home;
